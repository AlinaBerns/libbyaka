import { Component, Input } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { BookService } from '../services/bookservice/book.service';
import jwt_decode from 'jwt-decode';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ChangeDetectorRef } from '@angular/core';
import { CartService } from '../services/cartservice/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, 
    private bookService: BookService, 
    private cdRef: ChangeDetectorRef,
    private cartService: CartService ) {}

  searchControl = new FormControl('');

  borrowedBooks: any[] = [];
  
  books: any[] = [];

  selectedBooks: any[] = [];

  
  getUserName(): string {
    const token = localStorage.getItem('authToken') || '';
    const decodedToken:any = jwt_decode(token);
    return decodedToken.sub;
  }
  
  getActiveBorrowedBooks(): void {
    this.bookService.getActiveBorrowedBooks()
    .then(bbooks => {
      this.borrowedBooks = bbooks;
      console.log('Borrowed books: ', this.borrowedBooks); // For debugging purposes only
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
  }
  
  getAllBooks(): void {
    this.bookService.getAllBooks()
    .then(books => {
      this.books = books;
      console.log('Books: ', this.books); // For debugging purposes only
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
  }
  
  onLogOutButtonClick(): void {
    this.authService.logOut();
  }
  
  
  ngOnInit(): void {
    this.getActiveBorrowedBooks();
    this.getAllBooks();
    this.cartService.retrieveBooksFromStoredCart();
  }

  description: string = "Revival follows Jamie Morton from his boyhood in rural Maine (a familiar setting for King readers), through his young adult years as a drug-addicted guitarist in cover bands, to his mature years running a recording studio. Every time his life takes a dramatic turn, Charles Jacobs is there.";
  
  onSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),  // wait for 300ms pause in typing
      switchMap(query => {
        if (query !== null) {
          console.log('query: ', query);         
          
          return this.bookService.searchBooks(query);
        } else {
          return [];
        }
      })
    ).subscribe({
      next: data => {
        this.books = data;
        console.log('Books: ', this.books);
        
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  searchBooks(query:string){
    this.bookService.searchBooks(query);
  }


  addToCart(book: any): boolean {

    if (this.cartService.isBookInCart(book)) {
      alert('Book is already in cart!');
      return false;
    }

    if (this.cartService.addToCart(book)) {
      return true;
    }

    alert('Cart is full!');
    return false;
  }

  get cartItemCount(): number {
    return this.cartService.items.length;
  }

  get cartItems(): any[] {
    return this.cartService.items;
  }

  clearCart(): void {
    this.cartService.removeAllBooksFromCart();
  }

  bookIsInCart(book: any): boolean {  
    return this.cartService.isBookInCart(book);
  }


  toggleSelection(book: any): void {
    console.log('Book selected: ', book);
    
    const index = this.selectedBooks.findIndex(selectedBook => selectedBook.id === book.id);
    if (index < 0) {
      this.selectedBooks.push(book);
    } else {
      this.selectedBooks.splice(index, 1);
    }

    this.removeSelectedBooks();
  }

  removeSelectedBooks(): void {
    this.cartService.removeSelectedBooks(this.selectedBooks);
    this.selectedBooks = [];
    console.log('Selected books after removal: ', this.selectedBooks);
    
  }

  reserveBooks(): void {
    this.cartService.reserveBooks();
  }


}
