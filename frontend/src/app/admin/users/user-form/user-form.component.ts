import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Role } from 'src/app/core/models/Role';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();

  roles: Role[] = [
    { id: 1, authority: 'ROLE_FUNCTIONARY' },
    { id: 2, authority: 'ROLE_ADMIN' },
  ];

  select: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }

}
