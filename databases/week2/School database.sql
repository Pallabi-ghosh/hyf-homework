-- Part 2: School database --

SET NAMES utf8mb4;

CREATE DATABASE school_student_database;

USE school_student_database;


-- Part 2: School database --
-- Class: with the columns: id, name, begins (date), ends (date) --
CREATE TABLE `class` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `begins` DATETIME NULL DEFAULT NULL,
    `ends` DATETIME NULL DEFAULT NULL
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


-- Student: with the columns: id, name, email, phone, class_id (foreign key) --
CREATE TABLE `student` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL,
    `class_id` INT(10) UNSIGNED,
    CONSTRAINT `fk_class` FOREIGN KEY (`class_id`)
        REFERENCES `class` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;


-- create index on name column from student table --
CREATE INDEX student_name_index
ON student (name);



-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations). --
ALTER TABLE class MODIFY COLUMN status ENUM('not started', 'ongoing', 'finished');
ALTER TABLE class MODIFY COLUMN status ENUM('not started', 'ongoing', 'finished') DEFAULT 'not started';


