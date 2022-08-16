import { asNativeElements, Component, Input, OnInit, Output } from '@angular/core';
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
  @Input() book: Bookinterface | undefined
  num: number=0;

  constructor(private bookService: BookService) {
    this.bookList = this.bookService.getBooks()
  }
  ngOnInit(): void {
  }

  deleteAction(index: number) {
    return this.bookList.splice(index, 1);
  }
  
  addNewForm(data: FormGroup["value"]) {
    this.bookList.push(data);
  }

  addeditForm(data: FormGroup["value"]){
    this.bookList[this.num]=data;
  }

  show: boolean = false;
  showForm() {
    this.show = !this.show;
    this.edit= false;
  }

  edit: boolean=false;
 
  showEdit(i:number){
    this.edit=!this.edit;
    this.show = false
    this.num=i;
  }
  

}



