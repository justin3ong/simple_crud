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
  @Input() book: Bookinterface | undefined

  constructor(private bookService: BookService) {
    this.bookList = this.bookService.getBooks()
  }
  ngOnInit(): void {
  }

  deleteAction(index: number) {
    return this.bookList.splice(index, 1);
  }

  addNewForm(newForm: FormGroup) {
    this.bookList.push(newForm.value);
  }
  show: boolean = false;
  showForm() {
    this.show = !this.show
  }

}



