package com.carrental.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.carrental.dao.UserRepo;
import com.carrental.model.User;

@Service
public class UserService {

	@Autowired
	private UserRepo repo;
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
	
	public User saveUser(User user) {
		
		user.setPassword(encoder.encode(user.getPassword()));
		
		return repo.save(user);
	}
}
