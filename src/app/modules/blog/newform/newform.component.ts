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
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      comment: this.fb.array([]),
      isbn: ['', [Validators.required]]
    });
    this.authorFormArray = this.newForm.get('comment') as FormArray
  }

  submit(): void {
    console.log(this.newForm?.value);
  }
  ngOnInit(): void {
  }
  addComment(){
    this.authorFormArray.push(new FormControl(''))
  }
  deleteAuthor(i: number){
    this.authorFormArray.removeAt(i);
  }
  get id(){
    return this.newForm.get('id') as FormControl;
  }
  get title(){
    return this.newForm.get('title') as FormControl;
  }
  get description(){
    return this.newForm.get('description') as FormControl;
  }
  get comments(){
    return this.authorFormArray.get('comments')
  }
  clear(): void{
    this.newForm.reset(); 
  }

}
