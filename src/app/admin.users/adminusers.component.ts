import { Component } from '@angular/core';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminUsersComponent {

  constructor(private authService: AuthService) {}

  onLogOutButtonClick(): void {
    this.authService.logOut();
  }

}
