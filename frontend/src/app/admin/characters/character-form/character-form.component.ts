import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/core/models/Category';

import { Character } from 'src/app/core/models/Character';


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  character: Character = new Character();
  
  categories: Category[] = [
    { id: 1, name: 'Principal' },
    { id: 2, name: 'Membro da Shinra' },
    { id: 3, name: 'Secundário' },
    { id: 4, name: 'Vilão' },
    { id: 5, name: 'Weapon' },
    { id: 6, name: 'Turk' },
    { id: 7, name: 'Monstro' },
    { id: 8, name: 'Chefe' },
  ];
  select: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }


}
