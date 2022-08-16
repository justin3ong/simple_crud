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

  addNewFormData(data: FormGroup["value"]){
    this.newFormDataEvent.emit(data);
  }

  newForm: FormGroup; 
  constructor(private fb: FormBuilder) {
    this.newForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      authors: ['', Validators.required],
      isbn: ['', [Validators.required]]
    });
    this.newForm.valueChanges.subscribe(console.log);
  }


  ngOnInit(): void {
  }

  get authors(){
    return this.newForm.get('authors') as FormControl;
  }

  get id() {
    return this.newForm?.get('id') as FormControl;
  }
  get title() {
    return this.newForm?.get('title') as FormControl;
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
