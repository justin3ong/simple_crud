import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.scss']
})
export class EditformComponent implements OnInit {

  @Output() editFormDataEvent = new EventEmitter<FormGroup>();
  router: any;

  addeditFormData(data: FormGroup["value"]){
    this.editFormDataEvent.emit(data);
  }
  
  editForm: FormGroup; 
  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      authors: ['', Validators.required],
      isbn: ['', [Validators.required]]
    });
    this.editForm.valueChanges.subscribe(console.log);
  }


  ngOnInit(): void {
  }

  get authors(){
    return this.editForm.get('authors') as FormControl;
  }

  get id() {
    return this.editForm?.get('id') as FormControl;
  }
  get title() {
    return this.editForm?.get('title') as FormControl;
  }

  get isbn(){
    return this.editForm?.get('isbn') as FormControl
  }

  clear(): void {
    this.editForm?.reset();
  }

  ngAfterViewInit(): void {

  }
}

