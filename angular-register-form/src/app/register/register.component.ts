import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user';
import validate = WebAssembly.validate;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl(),
    country: new FormControl('', Validators.required),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    gender: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
  });

  get password() {
    return this.user.get('password');
  }

  get age() {
    return this.user.get('age');
  }

  get country() {
    return this.user.get('country');
  }

  get gender() {
    return this.user.get('gender');
  }

  get phone() {
    return this.user.get('phone');
  }

  countryList = [
    {id: 1, name: 'Việt Nam'},
    {id: 2, name: 'Nhật Bản'},
    {id: 3, name: 'Hàn Quốc'},
    {id: 4, name: 'Vương Quốc Anh'},
  ];

  userList: User[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user.value);
    const user1: User = {
      email: this.user.value.email,
      password: this.user.value.password,
      confirmPassword: this.user.value.confirmPassword,
      age: this.user.value.age,
      gender: this.user.value.gender,
      country: this.user.value.country,
      phone: this.user.value.phone
    };
    this.userList.push(user1);
  }
}
