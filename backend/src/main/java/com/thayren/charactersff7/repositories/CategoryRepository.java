package com.thayren.charactersff7.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thayren.charactersff7.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

	@Query("select cat from Category cat where cat.name like %?1%")
	Page<Category> find(String name, Pageable pageable);

}
