import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Character } from 'src/app/core/models/character';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Input() text: string = '';

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

  constructor() {}

  ngOnInit(): void {}

  save(form: NgForm) {
    console.log(form.value);
  }
}
