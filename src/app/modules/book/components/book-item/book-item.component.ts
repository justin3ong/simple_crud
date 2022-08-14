import { Component, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Bookinterface } from '../../models/bookinterface';
import { BookService } from '../../services/book.service';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  bookList: Bookinterface[] = [];
  @Input () book:Bookinterface | undefined
  //change id number here, put reactive form later
  editValue : number = 3;

  constructor(private bookService: BookService) {
    this.bookList = this.bookService.getBooks()
  }
  ngOnInit(): void {
  }
  
  deleteAction(index:number){
    return this.bookList.splice(index,1);
  }
  

  editAction(index: number){
  return this.bookList[index].id=this.editValue;
  }
  

}



