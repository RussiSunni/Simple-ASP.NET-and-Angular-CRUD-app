import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {

  loginForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  onSubmit(): void {
    // Process checkout data here
    console.log("submitted");
  }
}
