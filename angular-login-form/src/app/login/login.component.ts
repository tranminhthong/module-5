import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  title = 'Login';
  status = false;

  user: User = {
    email: 'abc@abc',
    password: '123456'
  };

  constructor() {
  }

  ngOnInit() {
  }

  private checkPass(password: string) {
    if (this.user.password === password) {
      this.title = `Hello ${this.user.email}`;
      this.status = true;
    }
  }

  onSubmit() {
    const user: User = {
      email: this.userForm.value.email,
      password: this.userForm.value.password
    };
    this.checkPass(user.password);
  }
}

export interface User {
  email?: string;
  password?: string;
}
