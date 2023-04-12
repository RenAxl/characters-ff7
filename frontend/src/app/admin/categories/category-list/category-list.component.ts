import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [
    { name: 'Principal'},
    { name: 'Membro da Shinra' },
    { name: 'Secundário' },
    { name: 'Vilão' },
    { name: 'Weapon' },
    { name: 'Turk' },
    { name: 'Monstro' },
    { name: 'Chefe' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
