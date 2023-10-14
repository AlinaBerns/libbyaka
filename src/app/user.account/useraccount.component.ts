import { Component } from '@angular/core';
import { BookService } from '../services/bookservice/book.service';
import { UserService } from '../services/userservice/user.service';
import { AuthService } from '../security/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-useraccount',
  templateUrl: './useraccount.component.html',
  styleUrls: ['./useraccount.component.css']
})
export class UserAccountComponent {

  id: number = 0;

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
    localStorage.clear();
  }

  changePassword(){
    const oldPassword = (<HTMLInputElement>document.getElementById('oldpassword')).value;
    const newPassword = (<HTMLInputElement>document.getElementById('newpassword')).value;
    const confirmPassword = (<HTMLInputElement>document.getElementById('confirmpassword')).value;

    this.userService.checkPassword(oldPassword).then(response => {
      if(response && newPassword === confirmPassword){
        const user = {
          password: newPassword
        }
        this.userService.updateUserInfo(user);
        localStorage.clear();
      }
    })
  }

  deleteProfile(){
    
      this.userService.deleteUser();
      

  }

}
