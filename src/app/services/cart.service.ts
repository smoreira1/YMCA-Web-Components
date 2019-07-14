import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { CartItem } from '../interfaces/cart-item.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[];
  isOpen = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter();
  private endpoint = environment.apiPath;
  
  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return of(this.cartItems);
  }

  addCartItem(itemNumber: string): boolean {
    console.log('Added Cart Item to cart');
    return true;
  }

  deleteCartItem(cartItemId: string) {}

  toggleDisplay(){
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    console.log('Shopping cart is open');
  }

  private handleError(error: HttpErrorResponse) {
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

}
