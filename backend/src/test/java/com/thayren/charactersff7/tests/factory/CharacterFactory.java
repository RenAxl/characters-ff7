package com.thayren.charactersff7.tests.factory;

import com.thayren.charactersff7.dto.CharacterDTO;
import com.thayren.charactersff7.entities.Category;
import com.thayren.charactersff7.entities.Character;


public class CharacterFactory {
	
	public static Character createCharacter() {
		Character character = new Character(1L, "Cloud Strife", 21, "Nibelhein", "Cloud Strife é o personagem principal de Final Fantasy VII ...", "https://static.wikia.nocookie.net/finalfantasy/images/5/5b/Cloud_Strife_from_FFVII_Remake_promo_render.png/revision/latest/top-crop/width/200/height/150?cb=20190910180154");
		character.getCategories().add(new Category(1L, null));
		
		return character;
	}
	
	public static CharacterDTO createCharacterDTO() {
		Character character = createCharacter(); 
		
		return new CharacterDTO(character); 
	}
	
	public static CharacterDTO createCharacterDTO(Long id) {
		CharacterDTO dto = createCharacterDTO(); 
		dto.setId(id);
		
		return dto;
	}
	
}


