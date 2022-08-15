import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.scss']
})
export class NewformComponent implements OnInit {
  newForm: FormGroup;
  commentForms: FormArray;
  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      comments: this.fb.array([]),
      isbn: ['', [Validators.required]]
    });
    this.commentForms = this.newForm.get('comments') as FormArray;
    this.newForm.valueChanges.subscribe(console.log);
  }
  submit(): void {
    console.log(this.newForm.value);
  }
  ngOnInit(): void {
  }
  addComment(){
    const comment = this.fb.group({
      newComment: ['']
    });
    this.commentForms.push(comment);
  }
  deleteAuthor(i: number){
    this.commentForms.removeAt(i);
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
  clear(): void{
    this.newForm.reset(); 
  }

}
