package com.carrental.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.carrental.model.BookingRequest;
import com.carrental.model.Car;
import com.carrental.model.User;
import com.carrental.service.BookingService;
import com.carrental.service.CarService;
import com.carrental.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@CrossOrigin
public class HomepageController {
	
	@Autowired
	CarService carService;
	
	@Autowired
	BookingService bookingService;
	
	@GetMapping("")
	public ResponseEntity<List<Car>> homePage() {
		
		return carService.getAllCars();
	}
	
	
	@GetMapping("get/{id}")
	public ResponseEntity<Car> getDetails(@PathVariable Integer id) {
		
		return carService.getById(id);
	}
	
	@GetMapping("/about")
	public String about(HttpServletRequest request) {
		//return "About page "+request.getSession().getId();
		return "This is server about page...";
	}
	
	@PostMapping("/book")
	public ResponseEntity<String> bookcars(@RequestBody BookingRequest bookingRequest) {
		
		// Validate booking request
        if (bookingRequest.getFromDate().after(bookingRequest.getToDate())) {
            return ResponseEntity.badRequest().body("Invalid booking dates");
        }
        
        // Here you can add logic to save booking details in the database
        System.out.println("Booking received: " + bookingRequest);
        // saving to database
        bookingService.addBooking(bookingRequest);
        
        return ResponseEntity.ok("Booking confirmed for " + bookingRequest.getCarModel());
        
	}
	
	@GetMapping("/admin/bookings")
	public ResponseEntity<List<BookingRequest>> getAllBookings(){
		List<BookingRequest> bookings= bookingService.getAllBookings();
		
		return new ResponseEntity<List<BookingRequest>>(bookings, HttpStatus.OK);
	}
	
	@GetMapping("/user/bookings/{username}")
	public ResponseEntity<List<BookingRequest>> getAllBookingsWithUsername(@PathVariable String username){
		List<BookingRequest> bookings= bookingService.getBookings(username);
		
		return new ResponseEntity<List<BookingRequest>>(bookings, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/booking/{id}")
	public ResponseEntity<String> deleteBooking(@PathVariable int id){
		
		bookingService.deleteBooking(id);
		
		return new ResponseEntity<String>("Booking Successfull", HttpStatus.OK);
	}
	
	@PutMapping("/admin/verify/{id}")
	public ResponseEntity<BookingRequest> verifyBooking(@PathVariable int id){
		return bookingService.verifyBooking(id);
	}
	
	@GetMapping("temp")
	public void setup() {
		// Creating 5 Car objects using the constructor
        Car car1 = new Car("Toyota", "Corolla", "Petrol", true, 5, 2020, 50, "www.toyota.com","https://drive.google.com/file/d/1MmwyMlPdEvoCeWeXEe5hIn6Q-RPfjbQQ/view?usp=drive_link");
        Car car2 = new Car("Honda", "Civic", "Diesel", true, 5, 2022, 60, "www.honda.com","https://drive.google.com/file/d/1tYZhLlBVBdeZZAFv7FV-eeFma7bf_cAj/view?usp=drive_link");
        Car car3 = new Car("BMW", "X5", "Diesel", true, 7, 2021, 100, "www.bmw.com","https://drive.google.com/file/d/1U95sZ9qv5PNr0K9uBJpPRg7dRpaur77S/view?usp=drive_link");
        Car car4 = new Car("Ford", "Focus", "Petrol", false, 5, 2019, 45, "www.ford.com","https://drive.google.com/file/d/1zz_t3YgjPD9h6DpXtL3guj-6KUoLVtZy/view?usp=drive_link");
        Car car5 = new Car("Audi", "A4", "Petrol", true, 5, 2023, 80, "www.audi.com","https://drive.google.com/file/d/1HUL3qRWhfIVL_reX-XhfuBN80zTrU_9-/view?usp=drive_link");
        
        
        carService.add(car1);
        carService.add(car2);
        carService.add(car3);
        carService.add(car4);
        carService.add(car5);
        
	}
	

}