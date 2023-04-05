package com.thayren.charactersff7.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thayren.charactersff7.dto.RoleDTO;
import com.thayren.charactersff7.dto.UserDTO;
import com.thayren.charactersff7.entities.Role;
import com.thayren.charactersff7.entities.User;
import com.thayren.charactersff7.repositories.RoleRepository;
import com.thayren.charactersff7.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private RoleRepository roleRepository;

	@Transactional(readOnly = true)
	public Page<UserDTO> findAllPaged(String name, PageRequest pageRequest) {
		Page<User> list = repository.find(name, pageRequest);
		Page<UserDTO> listDto = list.map(user -> new UserDTO(user));

		return listDto;
	}

	@Transactional(readOnly = true)
	public UserDTO findById(Long id) {
		Optional<User> obj = repository.findById(id);
		User entity = obj.get();

		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO insert(UserDTO dto) {
		User entity = new User();
		copyDtoToEntity(dto, entity);
		entity.setPassword(dto.getPassword());
		entity = repository.save(entity);

		return new UserDTO(entity);
	}

	@Transactional
	public UserDTO update(Long id, UserDTO dto) {
		User entity = repository.getOne(id);
		copyDtoToEntity(dto, entity);
		entity.setPassword(dto.getPassword());
		entity = repository.save(entity);

		return new UserDTO(entity);

	}

	private void copyDtoToEntity(UserDTO dto, User entity) {
		entity.setName(dto.getName());
		entity.setEmail(dto.getEmail());
		entity.getRoles().clear();

		for (RoleDTO roleDto : dto.getRoles()) {
			Role role = roleRepository.getOne(roleDto.getId());
			entity.getRoles().add(role);
		}
	}

	public void delete(Long id) {
		repository.deleteById(id);
	}

}