package com.carrental.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.carrental.dao.BookingDao;
import com.carrental.model.BookingRequest;

@Service
public class BookingService {
	
	@Autowired
	BookingDao bookingDao;
	
	public void addBooking(BookingRequest bookingRequest) {
		bookingDao.save(bookingRequest);
	}

	public List<BookingRequest> getAllBookings() {
		return bookingDao.findAll();
	}

	public List<BookingRequest> getBookings(String username) {
		return bookingDao.findBookingWithUsername(username);
	}

	public void deleteBooking(Integer id) {
		bookingDao.deleteById(id);
	}

	public ResponseEntity<BookingRequest> verifyBooking(int id) {
		
		BookingRequest booking = bookingDao.findById(id).get();
		if(booking == null) {
			return ResponseEntity.notFound().build();
		}
		
		booking.setIsVerified(true);
		
		BookingRequest verifiedBooking = bookingDao.save(booking);
		
		return new ResponseEntity<BookingRequest>(verifiedBooking, HttpStatus.OK);
	}
}
