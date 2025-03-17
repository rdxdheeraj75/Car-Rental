package com.carrental.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.dao.UserRepo;
import com.carrental.model.User;
import com.carrental.service.JwtService;
import com.carrental.service.UserService;

@RestController
@CrossOrigin()
public class UserController {
	
	@Autowired
	private UserService service;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private UserRepo userRepo;
	
	@PostMapping("register")
	public User register(@RequestBody User user) {
		
		System.out.println("This user is being created"+user);
		
		service.saveUser(user);
		return new User();
	}
	
	@PostMapping("login")
	public ResponseEntity<?> login(@RequestBody User user) {
		
		
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		
		if(authentication.isAuthenticated()) {
			
			String token = jwtService.generateToken(user.getUsername());
			 // Fetch user details from the database
	        User authenticatedUser = userRepo.findByUsername(user.getUsername());
	                
			// Create response containing token and user details
	        Map<String, Object> response = Map.of(
	                "token", token,
	                "username", authenticatedUser.getUsername(),
	                "authority", authenticatedUser.getAuthority()
	        );
	        
	        return ResponseEntity.ok(response);
		}
		
		return new ResponseEntity<>("Login Failed", HttpStatus.UNAUTHORIZED);
	}

}
