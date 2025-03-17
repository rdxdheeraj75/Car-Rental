package com.carrental.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.carrental.model.Car;

@Repository
public interface CarDao extends JpaRepository<Car, Integer> {

}
