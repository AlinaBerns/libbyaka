import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';
import { BookService } from '../services/bookservice/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService, private bookService: BookService ) {}

  books: any[] = [];

  getAllBooks(): void {
    this.bookService.getAllBooks().then((response) => {
      this.books = response.data;
    });

    console.log(
      'books: ', this.books
    );
    
  }

  onLogOutButtonClick(): void {
    this.authService.logOut();
  }


  ngOnInit(): void {
    this.getAllBooks();
  }
  

}
