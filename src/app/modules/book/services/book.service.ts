import { Injectable } from '@angular/core';
import { Bookinterface } from '../models/bookinterface';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Bookinterface[]=[
    {
      id: 1,
      name: "Harry Potter 1",
      authors: ["J.K, Rowling"],
      isbn: "hp1"
    },
  {
      id: 2,
      name: "Harry Potter 2",
      authors: ["J.K, Rowling"],
      isbn: "hp2"
    },
  {
      id: 3,
      name: "Harry Potter 3",
      authors: ["J.K, Rowling"],
      isbn: "hp3"
    },
  {
      id: 4,
      name: "Harry Potter 4",
      authors: ["J.K, Rowling"],
      isbn: "hp4"
    },
  {
      id: 5,
      name: "Game of Thrones",
      authors: ["George R.R. Martin"],
      isbn: "GoT5"
    }
  ];

  getBooks(){
    return this.books
  }

  constructor() { }
}
