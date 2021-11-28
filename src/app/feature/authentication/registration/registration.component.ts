import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});

  constructor(public service: authService, private builder: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.builder.group({
      username: [''],
      email_id: [''],
      phone: [''],
    });
  }

   onSubmit(): void {
    console.log(this.userForm.value);
    this.service.createUser(this.userForm.value).subscribe(
      (result) => {
        console.log('Result:- ', result);
      },
      (error) => {
        console.log('Error:-', error);
      }
    );
  }
}

