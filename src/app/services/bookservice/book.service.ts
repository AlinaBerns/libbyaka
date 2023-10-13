import { Injectable } from '@angular/core';
import axios from 'axios';
import  jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  getToken(): string {
    return localStorage.getItem('authToken') || '';
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return jwt_decode(token);
  }

  getConfig(): any {
    return {
      headers: {
        Authorization: 'Bearer ' + this.getToken(),
      },
    };
  }

  async getActiveBorrowedBooks(): Promise<any> {

    const url = 'http://localhost:8080/api/borrow/getall';
    
    try {
      if (!this.getToken()) {
       return Promise.reject('No token found');
      }

      //Get username from decoded token ("sub" in token)
      const id = this.getDecodedToken().id;

      console.log('username: ', id);
      

      //Make a parameterized url
      const parameterizedUrl = url + '?id=' + id;
      
      console.log(this.getToken()); // For debugging purposes only
      console.log(this.getConfig()); // For debugging purposes only
      
      //Make a GET request to the parameterized url
      return axios.get(parameterizedUrl, this.getConfig()).then(response => response.data);
      
      
    } catch (error) {
       return Promise.reject(error);
    }
  }


   async getAllBooks(): Promise<any> {
    const url = 'http://localhost:8080/api/book/getbooks';
    
    try {
      if (!this.getToken()) {
       return Promise.reject('No token found');
      }
            
      console.log(this.getToken()); // For debugging purposes only
      console.log(this.getConfig()); // For debugging purposes only
      
      //Make a GET request to the parameterized url
      return axios.get(url, this.getConfig()).then(response => response.data);
      
    } catch (error) {
       return Promise.reject(error);
    }

   }

   async searchBooks(query: string): Promise<any> {
    const url = 'http://localhost:8080/api/book';
    const parameterizedUrl = `${url}/search?query=${query}`;
  
    try {
      const response = await axios.get(parameterizedUrl, this.getConfig());
      return response.data;
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  }

}
