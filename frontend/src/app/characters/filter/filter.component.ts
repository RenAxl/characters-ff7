import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/core/models/Category';
import { Character } from 'src/app/core/models/Character';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() text: string = '';

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

  constructor() {}

  ngOnInit(): void {}

  save(form: NgForm) {
    console.log(form.value);
  }
}
