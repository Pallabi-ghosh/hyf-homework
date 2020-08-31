USE Data_model;

-- Data model Lets first start with creating the data model --
CREATE TABLE `Meal` (
    `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservations` INT(10),
    `price` DECIMAL,
    `created_date` DATE
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `Reservation`(
 `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `number_of_guests` INT(10),
 `meal_id` INT(10) unsigned NOT NULL,
 `created_date` DATETIME NOT NULL,
 `contact_phonenumber` VARCHAR(255) NOT NULL,
 `contact_name` VARCHAR(255) NOT NULL,
 `contact_email`VARCHAR(255) NOT NULL,
 CONSTRAINT `fk_meal_id` FOREIGN KEY (`meal_id`)
        REFERENCES `Meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;

CREATE TABLE `Review`(
 `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
 `title` VARCHAR(255) NOT NULL,
 `description`TEXT NOT NULL,
 `meal_id` INT(10) unsigned NOT NULL,
 `stars` INT(10),
 `created_date` DATETIME NOT NULL,
 CONSTRAINT `fk_meal2_id` FOREIGN KEY (`meal_id`)
        REFERENCES `Meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4 COLLATE = UTF8MB4_UNICODE_CI;




-- Create these queries for Meal Table --
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (32, 'Papa', 'sagittis', 'maecenas tincidunt', '2020-05-21 04:15:30', 67, 62.38, '2020-08-11');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (96, 'Mike', 'mus', 'vel', '2020-03-12 13:44:47', 35, 50.78, '2020-07-27');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (20, 'Hotel', 'velit', 'nisl duis', '2019-11-23 00:36:52', 69, 1.56, '2020-02-04');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (73, 'Romeo', 'a', 'nunc viverra', '2020-02-05 00:52:04', 5, 35.35, '2020-01-01');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (51, 'Hotel', 'erat', 'porta volutpat', '2020-08-06 08:00:00', 88, 65.15, '2020-01-06');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (8, 'November', 'in', 'libero non', '2020-05-11 00:47:15', 12, 18.99, '2020-03-05');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (69, 'Sierra', 'donec', 'interdum', '2019-09-09 03:12:39', 92, 82.86, '2019-09-14');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (89, 'India', 'ante', 'massa donec', '2019-12-08 11:26:41', 24, 88.27, '2020-02-10');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (22, 'Yankee', 'neque', 'elit', '2020-04-29 02:02:35', 25, 74.01, '2020-01-01');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (51, 'Papa', 'erat', 'odio consequat', '2019-09-14 11:35:39', 49, 89.94, '2019-10-23');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (51, 'Mike', 'in', 'eu', '2019-10-03 16:50:52', 53, 30.56, '2020-04-17');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (2, 'Golf', 'metus', 'at turpis', '2019-10-21 04:27:39', 96, 16.07, '2019-12-14');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (79, 'Juliett', 'dictumst', 'ultrices aliquet', '2020-04-03 19:27:40', 39, 58.51, '2020-02-18');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (2, 'India', 'sed', 'ut blandit', '2019-12-28 11:42:28', 86, 34.72, '2020-06-29');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (78, 'Delta', 'ante', 'ultrices', '2020-06-03 07:54:04', 77, 22.56, '2020-06-03');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (96, 'X-ray', 'in', 'nulla nunc', '2019-09-20 21:17:41', 32, 72.47, '2019-10-25');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (30, 'Zulu', 'varius', 'in blandit', '2019-11-10 08:58:10', 100, 56.55, '2019-09-15');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (43, 'Quebec', 'mauris', 'vestibulum sagittis', '2019-11-01 23:39:52', 91, 54.34, '2019-10-26');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (20, 'Oscar', 'convallis', 'vestibulum quam', '2020-03-23 04:48:44', 53, 28.05, '2019-11-01');
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (97, 'Foxtrot', 'pretium', 'penatibus et', '2020-07-10 16:56:41', 60, 61.27, '2020-04-25');

-- Get all meals --
select * from meal;
-- Add a new meal --
insert into meal (id, title, description, location, `when`, max_reservations, price, created_date) values (5, 'Romeo', 'quam', 'mauris sit', '2020-07-30 14:47:22', 53, 54.3, '2020-02-23');
-- Get a meal with any id, fx 1 --
select * from meal where id = 43;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes --
update meal set title = 'Polo' where id = 32;
-- Delete a meal with any id, fx 1 --
delete from meal where id = 97;


-- Create these queries for Reservation Table --
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (62, 32, '2020-03-11 07:14:08', '593-708-3429', 'Mårten', 'mgrishukov0@dedecms.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (73, 96, '2020-04-07 02:41:15', '639-696-8005', 'Eugénie', 'olownie1@netlog.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (40, 20, '2019-10-01 21:23:07', '691-671-1062', 'Anaïs', 'atickel2@unblog.fr');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (9, 73, '2019-09-12 03:18:46', '467-745-4680', 'Simplifiés', 'lpoundsford3@tripadvisor.com');
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (58, 51, '2020-06-27 00:06:31', '955-546-6896', 'Bérengère', 'cfawlo4@issuu.com');


-- Get all reservation --
select * from reservation;
-- Add a new reservation --
insert into reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email) values (69, 97, '2020-03-17 07:14:09', '593-700-3029', 'Arnab', 'arnabv0@dedecms.com');
-- Get a reservation with any id, fx 1 --
select * from reservation where id = 51;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes --
update reservation set created_date = '2010-09-12 03:18:45' where id = 1;
-- Delete a reservation with any id, fx 1 --
delete from reservation where id = 2;




-- Create these queries for Review Table --
insert into review (title, description, meal_id, stars, created_date) values ('mauris', 'adipiscing', 32, 74, '2019-09-05 07:41:09');
insert into review(title, description, meal_id, stars, created_date) values ('vehicula', 'tincidunt', 96, 54, '2019-12-12 22:30:35');
insert into review (title, description, meal_id, stars, created_date) values ('mauris', 'sem', 20, 80, '2020-02-28 03:10:56');
insert into review (title, description, meal_id, stars, created_date) values ('condimentum', 'elementum', 73, 90, '2020-01-14 18:20:31');
insert into review (title, description, meal_id, stars, created_date) values ('non', 'in', 51, 47, '2020-07-30 04:24:02');



-- Get all  Review  --
select * from  review ;
-- Add a new Review --
insert into review (title, description, meal_id, stars, created_date) values ('null', 'in', 5, 43, '2021-09-30 04:20:02');
-- Get a  Review  with any id, fx 1 --
select * from review where id = 5;
-- Update a  Review  with any id, fx 1. Update any attribute fx the title or multiple attributes --
update  review  set stars = 90 where id = 1;
-- Delete a  Review  with any id, fx 1 --
delete from  review  where id = 2;



-- Additional queries Now add a couple of different meals, reservations and reviews with different attributes. With those meals create the following queries --
-- Get meals that has a price smaller than a specific price fx 90 --
SELECT 
    *
FROM
    Meal
WHERE
    price < 60;
    
-- Get meals that still has available reservations --
SELECT 
    m.id AS meal_id,
    m.max_reservations,
    r.created_date,
    SUM(r.number_of_guests)
FROM
    reservation AS r
        LEFT JOIN
    meal AS m ON m.id = r.meal_id
GROUP BY r.meal_id , r.created_date
HAVING m.max_reservations < SUM(r.number_of_guests);
        
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde --
SELECT *
    FROM
    Meal
WHERE
    title LIKE '%oscar%';
    
-- Get meals that has been created between two dates --
SELECT
  *
FROM
  meal 
WHERE
  created_date BETWEEN '2020-08-11' AND '2021-09-18';
  
-- Get only specific number of meals fx return only 5 meals --
SELECT * from meal  limit 5;

-- Get the meals that have good reviews --

SELECT 
    m.id, m.title, ROUND(AVG(r.stars)) AS avg_stars
FROM
    meal AS m,
    review AS r
WHERE
    m.id = r.meal_id
GROUP BY m.id
HAVING AVG(stars) > 30;

        
-- Get reservations for a specific meal sorted by created_date --
SELECT 
    *
FROM
    meal
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews --
SELECT 
    m.id, m.title, ROUND(AVG(r.stars)) AS avg_stars
FROM
    meal AS m,
    review AS r
WHERE
    m.id = r.meal_id
GROUP BY m.id;




