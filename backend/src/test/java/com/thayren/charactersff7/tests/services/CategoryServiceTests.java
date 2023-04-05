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
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.thayren.charactersff7.dto.CategoryDTO;
import com.thayren.charactersff7.entities.Category;
import com.thayren.charactersff7.repositories.CategoryRepository;
import com.thayren.charactersff7.services.CategoryService;
import com.thayren.charactersff7.services.exceptions.DatabaseException;
import com.thayren.charactersff7.services.exceptions.ResourceNotFoundException;
import com.thayren.charactersff7.tests.factory.CategoryFactory;

@ExtendWith(SpringExtension.class)
public class CategoryServiceTests {
	
	@InjectMocks
	private CategoryService service;

	@Mock
	private CategoryRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private Category category;
	private PageImpl<Category> page;
	private long dependentId;
	
	@BeforeEach
	void setUp() throws Exception {
		
		existingId = 1L;
		nonExistingId = 1000L;
		category = CategoryFactory.createCategory();
		page = new PageImpl<>(List.of(category));
		dependentId = 2L;
		
		Mockito.when(repository.find(ArgumentMatchers.anyString(), ArgumentMatchers.any())).thenReturn(page);

		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(category));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());
		
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(category);

		Mockito.when(repository.getOne(existingId)).thenReturn(category);
		Mockito.doThrow(EntityNotFoundException.class).when(repository).getOne(nonExistingId);

		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
		
	}
	
	@Test
	public void findAllPagedShouldReturnPage() {
		String name = "";
		PageRequest pageRequest = PageRequest.of(0, 10);

		Page<CategoryDTO> result = service.findAllPaged(name, pageRequest);

		Assertions.assertNotNull(result);
		Assertions.assertFalse(result.isEmpty());
		Mockito.verify(repository, Mockito.times(1)).find(name, pageRequest);
	}
	
	@Test
	public void findByIdShouldReturnCategoryDTOWhenIdExists() {

		CategoryDTO result = service.findById(existingId);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).findById(existingId);
	}
	
	@Test
	public void findByShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.findById(nonExistingId);
		});

		Mockito.verify(repository, Mockito.times(1)).findById(nonExistingId);
	}
	
	@Test
	public void insertShouldReturnCategoryDTO() {
		Category category = new Category();

		CategoryDTO categoryDto = CategoryFactory.createCategoryDTO();

		category.setName(categoryDto.getName());

		CategoryDTO result = service.insert(categoryDto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository).save(category);
	}
	
	@Test
	public void updateShouldReturnCategoryDTOWhenIdExists() {

		CategoryDTO dto = new CategoryDTO();

		CategoryDTO result = service.update(existingId, dto);
		Assertions.assertNotNull(result);

		Mockito.verify(repository, Mockito.times(1)).getOne(existingId);
	}
	
	@Test
	public void updateShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {

		CategoryDTO dto = new CategoryDTO();

		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.update(nonExistingId, dto);
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

	@Test
	public void deleteShouldThrowDatabaseExceptionWhenDependentId() {

		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});

		Mockito.verify(repository, Mockito.times(1)).deleteById(dependentId);
	}

}
