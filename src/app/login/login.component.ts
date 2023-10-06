import { Component } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent {
   
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}  // Inject Router

  login() {
    // Create a request object
    const loginRequest = {
      username: this.username,
      password: this.password
    };

    // Make a POST request to the login endpoint
    axios.post('http://localhost:8080/api/auth/signin', loginRequest, {
      headers: {
        'Content-Type': 'application/json' 
      }
    })
      .then(response => {  // Handle the response
        console.log('Login successful:', response); 

        // Assuming the accessToken is returned in a property called 'accessToken' on the response data
        const accessToken = response.data.accessToken;
        const roles = response.data.roles;  // Extract roles from response data

        if (accessToken && roles) {
          // Save the accessToken and roles to local storage
          localStorage.setItem('authToken', accessToken);
          // Store roles as a JSON string -> to retrive it, use const roles = JSON.parse(localStorage.getItem('roles'))
          localStorage.setItem('roles', JSON.stringify(roles));  
          // Navigate to HomeComponent for users and AdminUsersComponent for admins
          switch (roles[0]) {
            case 'ROLE_USER':
              this.router.navigate(['/user/home']);
              break;
            case 'ROLE_ADMIN':
              this.router.navigate(['/admin/users']);
              break;
            default:
              console.error('Invalid role:', roles[0]);
          }
        } else {
          console.error('No accessToken received');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        alert('Login failed, check the console for details');
      });
  }
}
