package com.thayren.charactersff7.tests.services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.thayren.charactersff7.dto.CharacterDTO;
import com.thayren.charactersff7.entities.Character;
import com.thayren.charactersff7.repositories.CharacterRepository;
import com.thayren.charactersff7.services.CharacterService;
import com.thayren.charactersff7.services.exceptions.ResourceNotFoundException;
import com.thayren.charactersff7.tests.factory.CharacterFactory;


@ExtendWith(SpringExtension.class)
public class CharacterServiceTests {
	
	@InjectMocks
	private CharacterService service;

	@Mock
	private CharacterRepository repository;

	private long existingId;
	private long nonExistingId;
	private Character character;
	private PageImpl<Character> page;
	
	@BeforeEach
	void setUp() throws Exception {
		
		existingId = 1L;
		nonExistingId = 1000L;
		character = CharacterFactory.createCharacter();
		page = new PageImpl<>(List.of(character));
		
		Mockito.when(repository.find(ArgumentMatchers.any(), ArgumentMatchers.anyString(), ArgumentMatchers.any()))
		.thenReturn(page);
		
		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(character));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());
		
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(character);
		
		Mockito.when(repository.getOne(existingId)).thenReturn(character);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);
		
		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);

	}
	
	@Test
	public void findAllPagedShouldReturnPage() {
		Long categoryId = 0L;
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<CharacterDTO> result = service.findAllPaged(categoryId, name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		Mockito.verify(repository, Mockito.times(1)).find(null, name, pageRequest);
	}
	
	@Test
	public void findByIdShouldReturnCharacterDTOWhenIdExists() {

		CharacterDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).findById(existingId);
	}
	
	@Test
	public void findByIdShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).findById(nonExistingId);
	}
	
	@Test
	public void insertShouldReturnCharacterDTO() {
		Character character = new Character();
		CharacterDTO characterDto = new CharacterDTO();

		character.setName(characterDto.getName());
		character.setAge(characterDto.getAge());
		character.setResidence(characterDto.getResidence());
		character.setHistory(characterDto.getHistory());
		character.setImgUrl(characterDto.getImgUrl());


		CharacterDTO result = service.insert(characterDto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository).save(character);
	}
	
	@Test
	public void updateShouldReturnCharacterDTOWhenIdExists() {
		
		CharacterDTO characterDto = new CharacterDTO();
			
		CharacterDTO result = service.update(existingId, characterDto);
		Assertions.assertNotNull(result);
		
	    Mockito.verify(repository, Mockito.times(1)).getOne(existingId);
	}
	
	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
		
		CharacterDTO characterDto = new CharacterDTO();
				
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, characterDto);
		});
		
		
		Mockito.verify(repository, Mockito.times(1)).getOne(nonExistingId);
	}
	
	@Test
	public void deleteShouldDoNothingWhenIdExists() {
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(nonExistingId);
	}

}
