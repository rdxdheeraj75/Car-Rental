package com.carrental.model;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="bookings")
public class BookingRequest {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	
	private String username;
    private String carModel;
    private String companyName;
    private double rent;
    private Date fromDate;
    private Date toDate;
    private Boolean isVerified = false;
    
    // Getters and Setters
    
    public Integer getBookingId() {
    	return bookingId;
    }
    public void setBookingId(Integer bookingId) {
    	this.bookingId = bookingId;
    }
    
    public String getCarModel() { return carModel; }
	public void setCarModel(String carModel) { this.carModel = carModel; }
    
    public String getCompanyName() { return companyName; }
    public void setCompanyName(String companyName) { this.companyName = companyName; }
    
    public double getRent() { return rent; }
    public void setRent(double rent) { this.rent = rent; }
    
    public Date getFromDate() { return fromDate; }
    public void setFromDate(Date fromDate) { this.fromDate = fromDate; }
    
    public Date getToDate() { return toDate; }
    public void setToDate(Date toDate) { this.toDate = toDate; }
    
    public Boolean getIsVerified() {
		return isVerified;
	}
	public void setIsVerified(Boolean isVerified) {
		this.isVerified = isVerified;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	@Override
	public String toString() {
		return "BookingRequest [bookingId=" + bookingId + ", username=" + username + ", carModel=" + carModel
				+ ", companyName=" + companyName + ", rent=" + rent + ", fromDate=" + fromDate + ", toDate=" + toDate
				+ ", isVerified=" + isVerified + "]";
	}
	
}
