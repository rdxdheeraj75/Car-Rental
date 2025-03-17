# Car-Rental

“Car-Rental” is a web application for a car rental buisnesses. The client side is a single page app built with ReactJS and Bootstrap. The server side is built on Spring Boot using Java. The application uses MySQL database to store data. Security is provided by using JSON web tokens. The application uses Users, Rents, Sales and Cars as basic entities. Each user can register, login and logout. The application supports two user roles - User and Admin.

## Functionality
## Anonymous users
Can login, register, access the entire car fleet and the details for each car.
## User Login
Login in using username and password of already registered user. Usernames are unique identifier.
## User Register
Register a new user by providing email, password and username.
## User Logout
Logouts from the application.

## Car Details
Shows car details
Anonymous, users and admins can see all relevant information about the car
Users can check, if the car is available for rent for specified dates.
Admins can access edit and delete functionalities

## My Bookings
List all bookings of user.
Search by rentId, car brand and car model.

## Active rents
Admin only functionality
List of all active rents.
Admin can finish rent with specified a date.
If specified date is after the date of return of the rent, penalty sale is generated.

## Add car
Admin only functionality.
Form for car creation. All fields required.
After successful submit, a car is added to the database.
## Edit car
Admin only functionality.
Form for car edit. All fields required.
After successful submit, some or all of the car properties are modified.
## Delete car
Admin only functionality.
If the car still has active rents, delete is not possible and error is displayed.
After successful submit, the car is removed from the database along with all rents related to her.

## Used Tools
SpringBoot with java, React, PostgreSQL, Spring security
