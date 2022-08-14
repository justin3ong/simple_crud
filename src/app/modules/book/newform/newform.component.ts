import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss']
})
export class NewformComponent implements OnInit {
  newForm: FormGroup;
  authorFormArray: FormArray;
  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      author: this.fb.array([]),
      isbn: ['', [Validators.required]]
    });
    this.authorFormArray = this.newForm.get('author') as FormArray
  }

  submit(): void {
    console.log(this.newForm?.value);
  }
  ngOnInit(): void {
  }
  addAuthor(){
    this.authorFormArray.push(new FormControl(''))
  }
  deleteAuthor(i: number){
    this.authorFormArray.removeAt(i);
  }
  get id(){
    return this.newForm.get('id') as FormControl;
  }
  get name(){
    return this.newForm.get('name') as FormControl;
  }
  get author(){
    return this.authorFormArray.get('author')
  }
  clear(): void{
    this.newForm.reset(); 
  }
}
