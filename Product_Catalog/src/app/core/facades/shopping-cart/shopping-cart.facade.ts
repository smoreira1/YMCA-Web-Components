import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, throwError, of } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  tap,
  catchError,
  concatMap,
  mergeMap
} from 'rxjs/operators';
import { CartItem } from '@shared/interfaces/cart-item.interface';
import { HttpHandleErrorService } from '@shared/services/http-handle-error/http-handle-error.service';
import { ConstantPool } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface ShoppingCartResponse {
  results: CartItem[];
}

export interface ShoppingCartState {
  cartItems: CartItem[];
  cartId: string;
  cartOpen: boolean;
  loading: boolean;
  addToCartAttemptMessage: string;
}

let _state: ShoppingCartState = {
  cartItems: [],
  cartId: localStorage.getItem('cartId') || '',
  cartOpen: false,
  loading: true,
  addToCartAttemptMessage: ''
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class ShoppingCartFacade {
  private store = new BehaviorSubject<ShoppingCartState>(_state);
  private state$ = this.store.asObservable();

  cartItems$ = this.state$.pipe(map(state => state.cartItems), distinctUntilChanged());
  cartId$ = this.state$.pipe(map(state => state.cartId), distinctUntilChanged());
  cartOpen$ = this.state$.pipe(map(state => state.cartOpen));
  loading$ = this.state$.pipe(map(state => state.loading));
  addToCartAttemptMessage$ = this.state$.pipe(map(state => state.addToCartAttemptMessage));

  /**
   * Viewmodel that resolves once all the data is ready (or updated)...
   */
  vm$: Observable<ShoppingCartState> = combineLatest(
    [this.cartId$,
    this.cartItems$,
    this.cartOpen$,
    this.loading$,
    this.addToCartAttemptMessage$],
  ).pipe(
    map(([cartId, cartItems, cartOpen, loading, addToCartAttemptMessage]) => {
      return { cartId, cartItems, cartOpen, loading, addToCartAttemptMessage };
    })
  );

  /**
   * Watch 2 streams to trigger user loads and state updates
   */
  constructor(private http: HttpClient, public snackbar: MatSnackBar) {
    console.log('State:!!!!!!!!!!!');
    console.log(_state);
    combineLatest([this.cartId$])
      .pipe(
        switchMap(([cartId]) => {
          return this.findAllCartItems(cartId);
        })
      )
      .subscribe(cartItems => {
        this.updateState({ ..._state, cartItems, loading: false });
      });
  }

  // ------- Public Methods ------------------------

  // Allows quick snapshot access to data for ngOnInit() purposes
  getStateSnapshot(): ShoppingCartState {
    return { ..._state };
  }

  public deleteCartItem(cartItemId: string) {
    console.log('Delete Cart Item:');
    console.log(cartItemId);
  }

  public addCartItem(eventId: string): Observable<string> {
    this.updateState({ ..._state, loading: true });
    if (_state.cartId === '') {
      console.log('Update Cart Id');
      this.createShoppingCart().subscribe(response => {
        console.log(response);
        localStorage.setItem('cartId', response);
        this.updateState({..._state, 'cartId' : response, 'loading': false  });
      });
      console.log('_state');
      console.log(_state);
    }
    const body = {
      cartId : _state.cartId,
      eventId: eventId
    };
    console.log(body);
    const createCartItemurl = buildCreateCartItemUrl();
    return this.http
      .post<any>(createCartItemurl, body, httpOptions )
      .pipe(
        tap(response => console.log('CartId:')),
        tap(response => console.log(response)),
        map(
          response => {
            this.updateState({ ..._state, loading: false });
            const data = JSON.parse(response);
            this.openSnackBar('woof woof', 'succss');
            return data.data;
          }
        ),
        catchError(this.handleError)
      );
  }

  private cartItemResponseHandler(response: string) {
    // const data = JSON.parse(response);
    // if(data.success) {
    //   return of(data.data);
    // }
    // else if ( data.message === 'Invalid Cart Id.' ) {
    //   return this.createShoppingCart().pipe(tap(response => this.updateState({..._state, 'cartId': response.message[0]})));
    // }
  }

  private openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, {
      duration: 2000,
    });
  }

  public updateCartId(cartId: string) {
    this.updateState({..._state, 'cartId': cartId, 'loading': true});
  }

  public toggleCart() {
    console.log('toggle cart open');
    const cartOpen = !_state.cartOpen;
    this.updateState({..._state, 'cartOpen': cartOpen,  'loading': false});
  }



  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: ShoppingCartState) {
    this.store.next((_state = state));
  }

  private handleError(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  /** RandomUser REST call */
  private findAllCartItems(
    cartId: string,
  ): Observable<CartItem[]> {
    const url = buildGetShoppingCartUrl(cartId);
    return this.http
      .get<any>(url)
      .pipe(
        tap(response => console.log('Cart Itemssss')),
        tap(response => console.log(response)),
        map(
          response => { const data = JSON.parse(response); return data.data; }
        )
      );
  }

  private createShoppingCart(): Observable<string> {
    const url = buildCreateShoppingCartUrl();
    const body = {};
    return this.http
      .post<any>(url, body, httpOptions)
      .pipe(
        map(
          response => { const data = JSON.parse(response); return data.message[0]; }
        )
      );
  }


}

function buildGetShoppingCartUrl(cartId: string): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/ShoppingCart';
  const searchFor = `cartId=${cartId}`;
  return `${URL}?${searchFor}`;
}

function buildCreateShoppingCartUrl(): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/ShoppingCarts';
  return `${URL}`;
}

function buildCreateCartItemUrl(): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/ShoppingCart';
  return `${URL}`;
}

function buildDeleteCartItemUrl(cartItemId: string): string {
  const URL = 'https://build-ymcacf.cs17.force.com/services/apexrest/ShoppingCart';
  const searchFor = `cartId=${cartItemId}`;
  return `${URL}`;
}

