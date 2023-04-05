package com.thayren.charactersff7.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thayren.charactersff7.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}