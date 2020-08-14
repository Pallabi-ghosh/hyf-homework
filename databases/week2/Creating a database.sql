-- creating database --

CREATE DATABASE Cake_Bakery;

USE Cake_Bakery;

SET NAMES utf8mb4;

  
CREATE TABLE `bakery_offices` (
  `offices_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `created` datetime  NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bakery_office_staffs` (
`staff_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`age` int(10) unsigned NOT NULL,
`position_id` int(10) unsigned NOT NULL,
`position_title` varchar(255) NOT NULL,
`offices_id` int(10) unsigned,
CONSTRAINT `fk_offices_id` FOREIGN KEY (`offices_id`) REFERENCES `bakery_offices` (`offices_id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  
  CREATE TABLE `baked_items` (
`items_id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` varchar(255) NOT NULL,
`flavour` varchar(30) NOT NULL,
`offices_id` int(10) unsigned NOT NULL,
`staff_id` int(10) unsigned NOT NULL,
  CONSTRAINT `fk_id` FOREIGN KEY (`offices_id`) REFERENCES `bakery_offices` (`offices_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_id2` FOREIGN KEY (`staff_id`) REFERENCES `bakery_office_staffs` (`staff_id`) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


