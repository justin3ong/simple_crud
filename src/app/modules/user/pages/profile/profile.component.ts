import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', [Validators.required]],
      bio: ['', [Validators.required]],
      active: ['']
    })
  }
  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.userForm?.value);
  }
  clear(): void {
    this.userForm.reset();
  }
  get email(){
    return this.userForm.get('email') as FormControl
  }

  get name(){
    return this.userForm.get('name') as FormControl
  }

  get bio(){
    return this.userForm.get('bio') as FormControl
  }
}
