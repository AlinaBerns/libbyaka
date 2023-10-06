import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router) {}

  logOut(): void {
    // Clear token and role from local storage
    localStorage.removeItem('authToken');
    localStorage.removeItem('roles');
    
    // Redirect to login page or any other page you want to redirect to after logout
    this.router.navigate(['']);
  }
}
