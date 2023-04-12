import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }
}
