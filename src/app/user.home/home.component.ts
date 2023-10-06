import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authService: AuthService) {}

  onLogOutButtonClick(): void {
    this.authService.logOut();
  }
}
