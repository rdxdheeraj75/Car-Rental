package com.carrental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.carrental.dao.CarDao;
import com.carrental.model.Car;

@Service
public class CarService {
	
	@Autowired
	CarDao carDao;
	
	public ResponseEntity<List<Car>> getAllCars(){
		return new ResponseEntity<List<Car>>(carDao.findAll(), HttpStatus.OK);
	}

	public ResponseEntity<Car> getById(Integer id){
		return new ResponseEntity<Car>(carDao.findById(id).get(), HttpStatus.OK);
	}
	
	public void add(Car car) {
		carDao.save(car);
	}
}
