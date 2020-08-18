-- Part 4: Creating a database --

CREATE DATABASE Cake_Bakery;

USE Cake_Bakery;

SET NAMES utf8mb4;

CREATE TABLE `bakery_offices` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `created` DATETIME NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `staffs` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `age` INT(10) UNSIGNED NOT NULL,
    `position` VARCHAR(255) NOT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


CREATE TABLE `bakery_office_staffs` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `offices_id` INT(10) UNSIGNED,
    `staff_id` INT(10) UNSIGNED,
    CONSTRAINT `fk_offices_id` FOREIGN KEY (`offices_id`)
        REFERENCES `bakery_offices` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `fk_id1` FOREIGN KEY (`staff_id`)
        REFERENCES `staffs` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;
  
 CREATE TABLE `baked_items` (
    `items_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `flavour` VARCHAR(30) NOT NULL,
    `offices_id` INT(10) UNSIGNED NOT NULL,
    CONSTRAINT `fk_id` FOREIGN KEY (`offices_id`)
        REFERENCES `bakery_offices` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;



-- insert into items --
INSERT INTO bakery_offices(name, description,location, created)  VALUES ( 'Red Velvet Cake', 'Red Butter Cake', 'spain', '2020-02-08 09:17:18');
INSERT INTO bakery_offices(name, description,location, created)  VALUES ( 'Sponge Cake', 'Egg whites, vanilla, and cream of tartar', 'denmark', '2020-05-10 22:14:24');
INSERT INTO bakery_offices(name, description,location, created)  VALUES ( 'Chocolate Cake', 'Chocolate layered cake filled with chocolate, caramel and fondant cream', 'france', '2020-09-10 02:39:04');

-- Insert into staffs --
INSERT INTO staffs(name,age,position)  VALUES ('Polo', '27', '7');
INSERT INTO staffs(name,age,position)  VALUES ('Rima', '47','2'); 