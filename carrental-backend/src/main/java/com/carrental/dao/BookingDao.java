package com.carrental.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.carrental.model.BookingRequest;

@Repository
public interface BookingDao extends JpaRepository<BookingRequest, Integer> {

	@Query(value="select * from bookings where username =:username", nativeQuery = true)
	List<BookingRequest> findBookingWithUsername(String username);

}
