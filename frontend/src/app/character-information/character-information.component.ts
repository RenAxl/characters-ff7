import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../admin/characters/character.service';
import { Character } from '../core/models/Character';

@Component({
  selector: 'app-character-information',
  templateUrl: './character-information.component.html',
  styleUrls: ['./character-information.component.css']
})
export class CharacterInformationComponent implements OnInit {

  character: Character = new Character();
  
  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('characterId');

    if(id !=null){
      this.characterService.findById(id).subscribe(data => {
        this.character = data;
        console.log(data);
        console.log(this.character);
      })
    }

  }



}
