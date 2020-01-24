import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Injectable()
export class ShoppingCartService {
    private sidenav: MatSidenav;

    public setSidenav(sidenav: MatSidenav) {
        this.sidenav = sidenav;
    }

    public open() {
        console.log('Open');
        return this.sidenav.open();
    }


    public close() {
        return this.sidenav.close();
    }

    public toggle(): void {
        this.sidenav.toggle();
    }

    public getItemsInShoppingCart(): string{
        return '0';
    }
}