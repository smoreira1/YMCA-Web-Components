import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime
} from 'rxjs/operators';
import { YMCAEvent } from '@shared/interfaces/ymca-event.interface';
import { CartItem } from '@shared/interfaces/cart-item.interface';


export interface ShoppingCartResponse {
  results: CartItem[];
}

export interface ShoppingCartState {
  cartItems: CartItem[];
  cartId: string;
  loading: boolean;
}

let _state: ShoppingCartState = {
  cartItems: [],
  cartId: '',
  loading: false
};

@Injectable()
export class ShoppingCartFacade {
  private store = new BehaviorSubject<ShoppingCartState>(_state);
  private state$ = this.store.asObservable();

  cartItems$ = this.state$.pipe(map(state => state.cartItems), distinctUntilChanged());
  cartId$ = this.state$.pipe(map(state => state.cartId), distinctUntilChanged());
  loading$ = this.state$.pipe(map(state => state.loading));

  /**
   * Viewmodel that resolves once all the data is ready (or updated)...
   */
  vm$: Observable<ShoppingCartState> = combineLatest(
    [this.cartId$,
    this.cartItems$,
    this.loading$]
  ).pipe(
    map(([cartId, cartItems, loading]) => {
      return { cartId, cartItems, loading };
    })
  );

  /**
   * Watch 2 streams to trigger user loads and state updates
   */
  constructor(private http: HttpClient) {
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
  // getStateSnapshot(): YMCAEventState {
  //   return { ..._state, pagination: { ..._state.pagination } };
  // }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(value => this.addCartItem(value));

    return searchTerm;
  }

  removeCartItem(cartItemId: string) {
    //this.updateState({ ..._state, searchCriteria, loading: true });
  }

  addCartItem(eventId: string) {
    //this.updateState({ ..._state, pagination, loading: true });
  }

  // ------- Private Methods ------------------------

  /** Update internal state cache and emit from store... */
  private updateState(state: ShoppingCartState) {
    this.store.next((_state = state));
  }

  /** RandomUser REST call */
  private findAllCartItems(
    cartId: string,
  ): Observable<CartItem[]> {
    const url = buildUserUrl(cartId);
    return this.http
      .get<ShoppingCartResponse>(url)
      .pipe(map(response => response.results));
  }
}

function buildUserUrl(cartId: string): string {
  const URL = 'https://randomuser.me/api/';
  return `${URL}?${cartId}`;
}
