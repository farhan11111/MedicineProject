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

  onSummit(): void {
    this.service.createUser(this.userForm.value).subcribe(
      (result: any) => {
        console.log('result=', result);
      },
      (error: any) => {
        console.log('error=', error);
      }
    );
  }
}
