import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-admin.users',
  templateUrl: './admin.users.component.html',
  styleUrls: ['./admin.users.component.css']
})
export class AdminUsersComponent {
  constructor(private authService: AuthService) {}

  onLogOutButtonClick(): void {
    this.authService.logOut();
  }

}
