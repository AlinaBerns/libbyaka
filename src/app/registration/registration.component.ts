import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private router: Router, private authService:AuthService) {}  // Inject Router

  register() {
    // Create a request object
    const signUpRequest = {
      username: this.username,
      password: this.password,
      email: this.email
    };

    // Make a POST request to the register endpoint
    axios.post('http://localhost:8080/api/auth/signup', signUpRequest, {
      headers: {
        'Content-Type': 'application/json' 
      }
    }).then(response => {  
      console.log('Registration successful:', response);

      alert('Registration successful, please login');

      this.router.navigate(['/login']);

    }).catch(error => {
      console.error('Registration error:', error);
      alert('Registration failed, check the console for details');
    });
  }
}
