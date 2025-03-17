package com.carrental.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String companyName;
	private String modelName;
	private String fuelType;
	private boolean isAc;
	private int capacity;
	private int manufactureYear;
	private int rent;
	private String companyWebsite;
	private String image;
	
	public Car() {
		super();
		
	}

	public Car(String companyName, String modelName, String fuelType, boolean isAc, int capacity,
			int manufactureYear, int rent, String companyWebsite, String image) {
		super();
		this.companyName = companyName;
		this.modelName = modelName;
		this.fuelType = fuelType;
		this.isAc = isAc;
		this.capacity = capacity;
		this.manufactureYear = manufactureYear;
		this.rent = rent;
		this.companyWebsite = companyWebsite;
		this.image = image;
	}


	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getFuelType() {
		return fuelType;
	}

	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}

	public boolean isAc() {
		return isAc;
	}

	public void setAc(boolean isAc) {
		this.isAc = isAc;
	}

	public int getCapacity() {
		return capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	public int getManufactureYear() {
		return manufactureYear;
	}

	public void setManufactureYear(int manufactureYear) {
		this.manufactureYear = manufactureYear;
	}

	public int getRent() {
		return rent;
	}

	public void setRent(int rent) {
		this.rent = rent;
	}

	public String getCompanyWebsite() {
		return companyWebsite;
	}

	public void setCompanyWebsite(String companyWebsite) {
		this.companyWebsite = companyWebsite;
	}
	
	
	

}
