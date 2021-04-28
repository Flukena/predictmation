CREATE TABLE `comment` (
  `com_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `datetime` datetime NOT NULL,
  `cus_comment` varchar(500) NOT NULL,
  `emp_ratings` varchar(500) NOT NULL,
  `shop_ratings` varchar(500) NOT NULL,
  `mem_id` int(10) unsigned,
  PRIMARY KEY (`com_id`),
  UNIQUE KEY `com_id` (`com_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `member` (
  `mem_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mem_name` varchar(500) NOT NULL,
  `mem_age` int(10) NOT NULL,
  `mem_sex` enum('Male','Female') NOT NULL,
  `mem_phone` varchar(255) NOT NULL,
  `mem_email` varchar(255) NOT NULL,
  `mem_birthday` date NOT NULL,
  `date_of_application` date NOT NULL,
  `expiration_date` date NOT NULL,
  `emp_id` int(10) unsigned,
  PRIMARY KEY (`mem_id`),
  UNIQUE KEY `mem_id` (`mem_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `employee` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(500) NOT NULL,
  `emp_age` int(10) NOT NULL,
  `sex` enum('Male','Female') NOT NULL,
  `emp_address` varchar(255) NOT NULL,
  `emp_phone` varchar(255) NOT NULL,
  `emp_salary` int(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `emp_dop` date NOT NULL,
  `position` varchar(255) NOT NULL,
  `type` enum('manager','barista') NOT NULL,
  PRIMARY KEY (`emp_id`),
  UNIQUE KEY `emp_id` (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `User` (
  `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `emp_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `manager` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `barista` (
  `emp_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `act` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order` (
  `order_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `order_date` date NOT NULL,
  `emp_id`  int(10) unsigned NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `order_detail` (
  `order_d_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `price` int(10) NOT NULL,
  `unit` int(10) NOT NULL,
  `order_id` int(10) unsigned NOT NULL,
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

CREATE TABLE `buy` (
  `buy_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `buy_date` date NOT NULL,
  `emp_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`buy_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `buy_detail` (
  `buy_d_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `buy_unit` int(10) NOT NULL,
  `price` int(10) NOT NULL,
  `supply_id` int(10) unsigned NOT NULL,
  `buy_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`buy_d_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `supply` (
  `supply_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `supply_date` date NOT NULL,
  `supply_exp` date NOT NULL,
  `supply_cost` int(10) NOT NULL,
  `supply_vol` int(10) NOT NULL,
  `supply_name` varchar(255) NOT NULL,
  `supply_type` varchar(255) NOT NULL,
  PRIMARY KEY (`supply_id`),
  UNIQUE KEY `supply_name` (`supply_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

alter table `comment` add FOREIGN KEY (`mem_id`) REFERENCES `member`(`mem_id`);
alter table `member` add FOREIGN KEY (`emp_id`) REFERENCES `barista`(`emp_id`);
alter table `User` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `manager` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `barista` add FOREIGN KEY (`emp_id`) REFERENCES `employee`(`emp_id`);
alter table `order` add FOREIGN KEY (`emp_id`) REFERENCES `barista`(`emp_id`);
alter table `order_detail` add FOREIGN KEY (`order_id`) REFERENCES `order`(`order_id`);
alter table `order_detail` add FOREIGN KEY (`product_id`) REFERENCES `product`(`product_id`);
alter table `product` add FOREIGN KEY (`emp_id`) REFERENCES `manager`(`emp_id`);
alter table `privilege` add FOREIGN KEY (`emp_id`) REFERENCES `manager`(`emp_id`);
alter table `buy` add FOREIGN KEY (`emp_id`) REFERENCES `manager`(`emp_id`);
alter table `buy_detail` add FOREIGN KEY (`supply_id`) REFERENCES `supply`(`supply_id`);
alter table `buy_detail` add FOREIGN KEY (`buy_id`) REFERENCES `buy`(`buy_id`);