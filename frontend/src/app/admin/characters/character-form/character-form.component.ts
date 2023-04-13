import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Character } from 'src/app/core/models/Character';


@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {

  character: Character = new Character();
  
  categories = [
    { label: 'Principal', value: 1 },
    { label: 'Membro da Shinra', value: 2 },
    { label: 'Secundário', value: 3 },
    { label: 'Vilão', value: 4 },
    { label: 'Weapon', value: 5 },
    { label: 'Turk', value: 6 },
    { label: 'Monstro', value: 7 },
    { label: 'Chefe', value: 8 },
  ];

  select: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  save(form: NgForm){
    console.log(form.value);
  }


}
