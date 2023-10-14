import { Injectable } from '@angular/core';
import axios from 'axios';
import  jwt_decode from 'jwt-decode';
import { BookService } from '../bookservice/book.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = [];
  private readonly maxCartSize = 5;

  constructor(private bookService: BookService) {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
  } else {
      this.cart = [];
  }
}

  get items() {
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
    return this.cart.some(item => item.id === book.id);
  }


  removeAllBooksFromCart(){
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }



  removeSelectedBooks(selectedBooks: any[]): void {
    const selectedBookIds = selectedBooks.map(book => book.id);  // Create an array of selected book ids
    this.cart = this.cart.filter(item => !selectedBookIds.includes(item.id));  // Filter out the selected books by id
    localStorage.setItem('cart', JSON.stringify(this.cart));  // Update local storage
  }

  reserveBooks(): void {

    const config = this.bookService.getConfig();

    const token = this.bookService.getDecodedToken();

    const url = 'http://localhost:8080/api/borrow/reserve'

    // Create a request object
    const BorrowBookRequest = {
      userId: token.id,
      bookId: 0
    };

    
    const bookIds = this.cart.map(item => item.id);  // Create an array of book ids

    for (const bookId of bookIds) {
      
      BorrowBookRequest.bookId = bookId;
      console.log(BorrowBookRequest);
      axios.post(url, BorrowBookRequest, config).then(response => {
        console.log('Book reserved: ', response.data);
        this.removeAllBooksFromCart();
      }).catch(error => {
        console.log('Error reserving book: ', error);
      });
    }
  }

  retrieveBooksFromStoredCart(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cart = JSON.parse(storedCart);
    } else {
      this.cart = [];
    }
  }

}