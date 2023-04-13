import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters = [
    {
      name: "Cloud Strife",
      age: 21,
      residence: "Nibelhein"
    },
    {
      name: "Rufus Shinra",
      age: 25,
      residence: "Midgar"
    },
    {
      name: "Elmyra Gainsborough",
      age: 45,
      residence: "Midgar"
    },
    {
      name: "Sephiroth",
      age: 27,
      residence: "Nibelhein"
    },
    {
      name: "Ultimate Weapon",
      age: 0,
      residence: "Desconhecido"
    },
    {
      name: "Rude",
      age: 30,
      residence: "Midgar"
    },
    {
      name: "Midgar Zolom",
      age: 0,
      residence: "Grasslands area"
    },
    {
      name: "Lost Number",
      age: 0,
      residence: "Shinra Mansion"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
