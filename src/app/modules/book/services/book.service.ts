import { Injectable } from '@angular/core';
import { Bookinterface } from '../models/bookinterface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Bookinterface[] = [
    {
      id: 1,
      title: "Harry Potter 1",
      authors: "J.K, Rowling",
      isbn: "hp1"
    },
    {
      id: 2,
      title: "Harry Potter 2",
      authors: "J.K, Rowling",
      isbn: "hp2"
    },
    {
      id: 3,
      title: "Harry Potter 3",
      authors: "J.K, Rowling",
      isbn: "hp3"
    },
    {
      id: 4,
      title: "Harry Potter 4",
      authors: "J.K, Rowling",
      isbn: "hp4"
    },
    {
      id: 5,
      title: "Game of Thrones",
      authors: "George R.R. Martin",
      isbn: "GoT5"
    }
  ];

  getBooks() {
    return this.books
  }
  
  getAuthors(i:number){
    return this.books[i].authors;
  }
  
  constructor() { }
}
