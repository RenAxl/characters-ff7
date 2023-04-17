import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/core/models/Character';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = []

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.characterService.list().subscribe((data)=> {
      this.characters = data.content;
    });
  }

}
