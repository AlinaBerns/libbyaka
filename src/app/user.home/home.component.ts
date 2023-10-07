import { Component, Input } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { BookService } from '../services/bookservice/book.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private bookService: BookService ) {}

  borrowedBooks: any[] = [];
  
  books: any[] = [];
  
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
  }

  description: string = "Revival follows Jamie Morton from his boyhood in rural Maine (a familiar setting for King readers), through his young adult years as a drug-addicted guitarist in cover bands, to his mature years running a recording studio. Every time his life takes a dramatic turn, Charles Jacobs is there.";
  
}
