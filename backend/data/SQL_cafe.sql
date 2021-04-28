CREATE TABLE `cus_user` (
  `cus_user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cus_username` varchar(255) NOT NULL,
  `cus_password` varchar(255) NOT NULL,
  `cus_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`cus_user_id`),
  UNIQUE KEY `cus_user_id` (`cus_user_id`),
  UNIQUE KEY `cus_username` (`cus_username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `customer` (
  `cus_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cus_name` varchar(500) NOT NULL,
  `cus_age` int(10) NOT NULL,
  `cus_sex` enum('Male','Female') NOT NULL,
  `cus_phone` varchar(255) NOT NULL,
  `cus_email` varchar(255) NOT NULL,
  `cus_birthday` date NOT NULL,
  `date_of_application` date NOT NULL,
  `expiration_date` date NOT NULL,
  `emp_id` int(10) unsigned,
  PRIMARY KEY (`cus_id`),
  UNIQUE KEY `cus_id` (`cus_id`),
  UNIQUE KEY `cus_name` (`cus_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `employee` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(500) NOT NULL,
  `emp_age` int(10) NOT NULL,
  `emp_sex` enum('Male','Female') NOT NULL,
  `emp_address` varchar(255) NOT NULL,
  `emp_phone` varchar(255) NOT NULL,
  `emp_salary` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emp_dop` date NOT NULL,
  `position` varchar(255) NOT NULL,
  `type` enum('manager','barista') NOT NULL,
  PRIMARY KEY (`emp_id`),
  UNIQUE KEY `emp_name` (`emp_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `User` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `emp_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `manager` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `department` int(10) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `barista` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `act` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `cart` (
  `cart_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cart_date` date NOT NULL,
  `cus_id`  int(10) unsigned NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order_detail` (
  `order_d_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `price` int(10) NOT NULL,
  `unit` int(10) NOT NULL,
  `cart_id` int(10) unsigned NOT NULL,
  `product_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`order_d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `product` (
  `product_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_price` int(10) NOT NULL,
  `product_size` enum('M','L','XL') NOT NULL,
  `product_img` varchar(255) NOT NULL,
  `product_vol` int(10) NOT NULL,
  `emp_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`product_id`),
  UNIQUE KEY `product_name` (`product_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `privilege` (
  `spec_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `end_pri` datetime NOT NULL,
  `start_pri` datetime NOT NULL,
  `spec_privilege` int(10) NOT NULL,
  `emp_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`spec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


alter table `cus_user` add FOREIGN KEY (`cus_id`) REFERENCES `customer`(`cus_id`);
alter table `User` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `manager` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `barista` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `cart` add FOREIGN KEY (`cus_id`) REFERENCES `customer`(`cus_id`);
alter table `order_detail` add FOREIGN KEY (`cart_id`) REFERENCES `cart`(`cart_id`);
alter table `order_detail` add FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`);
alter table `product` add FOREIGN KEY (`emp_id`) REFERENCES `barista`(`emp_id`);
alter table `privilege` add FOREIGN KEY (`emp_id`) REFERENCES `manager`(`emp_id`);

