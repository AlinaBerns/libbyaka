import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private readonly maxCartSize = 5;

  constructor() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
  } else {
      this.cart = [];
  }
}

  get items() {
    this.loadCart();
    return this.cart;
  }

  addToCart(item: any): boolean {

    if (this.cart.length < this.maxCartSize) {
      this.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      return true;
    }
    return false;  // Indicate that the item could not be added due to cart size limit
  }


  isBookInCart(book: any): boolean {
    //this.cart = JSON.parse(localStorage.getItem('cart') || '[]') as any[];
    // return this.cart.some(item => item.id === book.id);
    this.loadCart();
    return this.cart.some(item => item.id === book.id);
  }

  loadCart(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]') as any[];
  }

  removeSelectedBooks(selectedBooks: any[]): void {
    const selectedBookIds = selectedBooks.map(book => book.id);  // Create an array of selected book ids
    this.cart = this.cart.filter(item => !selectedBookIds.includes(item.id));  // Filter out the selected books by id
    localStorage.setItem('cart', JSON.stringify(this.cart));  // Update local storage
  }
}