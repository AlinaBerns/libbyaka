import { Injectable } from '@angular/core';
import jwt_Decode from 'jwt-decode';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return jwt_Decode(token);
  }

  getConfig(): any {
    return {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    };
  }

  constructor() { }

  async checkPassword(password: string): Promise<boolean> {
    // Make a GET request to the check password endpoint

    const userId = this.getDecodedToken().id;

    const response = await axios.get('http://localhost:8080/api/users/checkpassword?id=' + userId + '&password=' + password, this.getConfig()).then(response => response.data);

    return response;
  }


  updateUserInfo(user:any): void {
    // Make a PUT request to the update user info endpoint

    const userId = this.getDecodedToken().id;

    user.id = userId;

    const response = axios.post('http://localhost:8080/api/users/update', user ,this.getConfig()).then(response => response.data);

    console.log(response);
    

  }

  deleteUser(): void {
 
  axios.delete('http://localhost:8080/api/users/delete?id=' + this.getDecodedToken().id, this.getConfig()).then(response => response.data);

  }
}
