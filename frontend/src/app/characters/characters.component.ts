import { Component, OnInit } from '@angular/core';
import { Character } from '../core/models/Character';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }
  
  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.charactersService
      .list()
      .subscribe((data) => {
        this.characters = data.content;
      });
  }
}
