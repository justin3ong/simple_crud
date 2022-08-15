import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss']
})
export class NewformComponent implements OnInit, AfterViewInit {
  @Output() newFormDataEvent = new EventEmitter<FormGroup>();
  router: any;

  addNewFormData(data: FormGroup){
    this.newFormDataEvent.emit(data);
  }

  newForm: FormGroup; 
  authorForms: FormArray;
  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      authors: this.fb.array([]),
      isbn: ['', [Validators.required]]
    });
    this.newForm.valueChanges.subscribe(console.log);
    this.authorForms = this.newForm.get('authors') as FormArray;
  }
  ngOnInit(): void {
  }

  addAuthor() {
    const author = this.fb.group({
      authorName: [''],
    });
    this.authorForms.push(author);
  }

  deleteAuthor(i: number) {
    this.authorForms.removeAt(i);
  }
  get id() {
    return this.newForm?.get('id') as FormControl;
  }
  get name() {
    return this.newForm?.get('name') as FormControl;
  }

  get isbn(){
    return this.newForm?.get('isbn') as FormControl
  }

  clear(): void {
    this.newForm?.reset();
  }

  ngAfterViewInit(): void {
  }

}
