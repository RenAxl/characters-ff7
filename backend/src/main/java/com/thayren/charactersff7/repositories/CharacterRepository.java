package com.thayren.charactersff7.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thayren.charactersff7.entities.Category;
import com.thayren.charactersff7.entities.Character;


@Repository
public interface CharacterRepository extends JpaRepository<Character, Long> {

	@Query("SELECT DISTINCT obj "
			+ "FROM Character obj "
			+ "INNER JOIN obj.categories cats "
			+ "WHERE "
			+ "(COALESCE(:categories) IS NULL OR cats IN :categories) "
			+ "AND "
			+ "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
	Page<Character> find(List<Category> categories, String name, Pageable pageable);

	@Query("SELECT obj FROM Character obj JOIN FETCH obj.categories WHERE obj IN :characters")
	List<Character> findCharactersWithCategories(List<Character> characters);

}
