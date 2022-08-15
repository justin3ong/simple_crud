import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss']
})
export class NewformComponent implements OnInit {
  idOutput: string | undefined;
  nameOutput: string | undefined;
  authorOutput: string[] | undefined;
  isbnOutput: string | undefined;

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


  submit(): void {
    console.log(this.newForm.value);
    this.idOutput = this.newForm.value.id;
    this.nameOutput = this.newForm.value.name;
    this.authorOutput = this.newForm.value.author;
    this.isbnOutput = this.newForm.value.isbn;
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


}
