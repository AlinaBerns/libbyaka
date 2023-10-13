import { Component } from '@angular/core';
import { BookService } from '../services/bookservice/book.service';
import { UserService } from '../services/userservice/user.service';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  constructor(private bookService: BookService, private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.bookService.getActiveBorrowedBooks();
  }

  changePersonalInfo(){
    const user = {
      userName: (<HTMLInputElement>document.getElementById('username')).value,
      email: (<HTMLInputElement>document.getElementById('email')).value,
    }

    this.userService.updateUserInfo(user);
  }

  





}
