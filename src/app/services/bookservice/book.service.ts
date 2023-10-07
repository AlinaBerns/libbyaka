import { Injectable } from '@angular/core';
import axios from 'axios';


const token = localStorage.getItem('authToken');

const config = {
headers: {
  Authorization: 'Bearer ' + token,
  },
};

const url = 'http://localhost:8080/api/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() {}

  async getAllBooks(): Promise<any> {

    console.log(token);
    console.log(config);
    try {
      if (!token) {
        console.error('No token found');
      }

     return await axios.get(url, config);
      
    } catch (error) {
      console.error("something went wrong: ", error);
    }
  }
}
