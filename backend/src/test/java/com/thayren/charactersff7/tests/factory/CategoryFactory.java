package com.thayren.charactersff7.tests.factory;

import com.thayren.charactersff7.dto.CategoryDTO;
import com.thayren.charactersff7.entities.Category;

public class CategoryFactory {
	
	public static Category createCategory() {
		Category category = new Category(1L, "Principal");
		
		return category;
	}
	
	public static CategoryDTO createCategoryDTO() {
		Category category = createCategory();
		
		return new CategoryDTO(category);
	}
	
	public static CategoryDTO createCategoryDTO(Long id) {
		CategoryDTO dto = createCategoryDTO();
		dto.setId(id);
		
		return dto;
	}

}
