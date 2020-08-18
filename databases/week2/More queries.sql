-- Part 3: More queries --

-- More queries --

SET NAMES utf8mb4;

CREATE DATABASE More_queries;

USE More_queries;

CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `status` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `task` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `created` DATETIME NOT NULL,
  `updated` DATETIME NOT NULL,
  `due_date` DATETIME NULL DEFAULT NULL,
  `status_id` int(10) unsigned NOT NULL,
  `user_id` int(10) unsigned,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



-- Get all tasks assigned to users whose email ends in @spotify.com --
SELECT 
    *
FROM
    user
        WHERE
        email LIKE '%@spotify.com%';


-- Get all taks for 'Donald Duck' where status 'not started' -- 
SELECT 
    *
FROM
    user,
    status    
WHERE
    user.name LIKE '%Donald Duck%'
        AND status.name = 'Not started';


-- Get all task for 'Maryrose Meadows' that were created in september --
SELECT 
    task.*
FROM
    user,
    task
WHERE
    user.name = 'Maryrose Meadows'
        AND user.id = task.user_id
        AND MONTH(task.created) = 09;
        
        select * from task where id= 7;
        

-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. (hint: use group by) --
SELECT 
    count(*),MONTHNAME(created) 
AS 
    task_per_month 
FROM task GROUP BY task_per_month;


-- Users --
insert into user ( name, email, phone) values ( 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into user ( name, email, phone) values ( 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into user ( name, email, phone) values ( 'Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
insert into user ( name, email, phone) values ( 'Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
insert into user ( name, email, phone) values ( 'Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
insert into user ( name, email, phone) values ( 'Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
insert into user ( name, email, phone) values ( 'Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
insert into user ( name, email, phone) values ( 'Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');
insert into user ( name, email, phone) values ( '王秀英', 'wang.xiuying@weebly.com', '891-952-6749');
insert into user ( name, email, phone) values ( 'إلياس', 'elias@github.com', '202-517-6983');
insert into user ( name, email, phone) values ( 'Donald Duck', 'donald@duck.com', NULL);
insert into user ( name, email, phone) values ( 'Adam Smith', 'smith@bla.com', NULL);

-- Statuses --
insert into status (id, name) values (1, 'Not started');
insert into status (id, name) values (2, 'In progress');
insert into status (id, name) values (3, 'Done');


-- Tasks --
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Become a billionaire', 'This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3, 6);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Plan meeting with London office', 'We will probably use skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2, 8);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1, 1);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', null, 2, 9);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Fix the flat tire on the bike', 'Tools are in the garage', '2017-09-13 23:16:30', '2017-10-06 04:03:52', '2017-12-07 11:51:11', 2, 6);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Wash the car', NULL, '2017-10-06 19:39:16', '2017-10-03 04:49:05', '2017-12-04 17:43:16', 2, 10);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Walk the dog', NULL, '2017-09-03 02:47:17', '2017-10-12 18:40:08', null, 3, 2);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Write a book', 'Maybe something about dragons?', '2017-10-11 06:14:01', '2017-10-17 12:19:08', '2017-12-21 20:18:05', 2, 6);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Do HackYourFuture homework', NULL, '2017-10-04 13:55:16', '2017-10-10 00:18:05', '2017-12-19 17:01:10', 1, 3);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Iron shirts', NULL, '2017-09-23 03:59:58', '2017-10-19 08:30:48', '2017-12-08 11:00:35', 3, 9);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Water the potted plants', 'Maybe they need fertilizer as well', '2017-09-29 23:38:42', '2017-10-08 04:24:53', null, 2, 1);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Buy wine for the birthday party', 'Both red and white wine', '2017-10-10 14:57:22', '2017-10-14 14:03:30', '2017-12-10 23:43:56', 2, 5);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Buy gift for Paul', 'He could use a shirt or a tie and some socks', '2017-09-09 05:22:08', '2017-10-17 15:58:05', '2017-12-04 20:45:18', 3, 3);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Change lightbulb in hallway', 'Should be an LED bulb', '2017-10-01 19:07:35', '2017-10-03 10:02:27', '2017-12-08 17:09:03', 3, 10);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Wash windows', NULL, '2017-10-02 22:15:17', '2017-10-07 22:31:35', '2017-12-06 03:36:09', 2, 8);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Setup salary databases for accounting', 'Use MySQL', '2017-10-25 05:35:33', '2017-10-10 23:22:33', '2017-12-05 00:19:08', 1, 9);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Learn how databases work', NULL, '2017-09-06 03:16:47', '2017-10-10 16:56:58', '2017-12-18 05:08:05', 3, 5);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Make the databases perform better', 'It should be possible to optimize the indexes', '2017-10-03 09:27:20', '2017-10-01 16:27:46', '2017-12-01 13:28:35', 2, 4);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Buy beer for the company party', '2 or 3 cases should be enough', '2017-10-08 01:39:02', '2017-10-13 23:07:41', null, 3, 4);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Knit sweater', NULL, '2017-09-22 17:14:55', '2017-10-08 09:01:35', '2017-12-15 20:33:57', 2, 9);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Charge electric bicycle', 'It sucks to ride it without a battery!', '2017-10-10 12:25:07', '2017-10-07 21:45:01', '2017-12-10 19:02:17', 1, 7);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Buy new phone', 'The battery in the current one only lasts 5 hours 😞', '2017-09-17 00:25:34', '2017-10-09 11:48:12', null, 3, NULL);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Ride bike aroud Sjælland', 'Remember rainclothes and tire repair kit!', '2017-10-20 19:21:13', '2017-10-07 01:38:06', '2017-12-19 15:08:18', 2, 7);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Look at apartments in Ørestad', '2 or 3 rooms', '2017-10-30 09:47:00', '2017-10-19 06:11:26', null, 1, 6);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Empty Mr Fluffy\'s litterbox', NULL, '2017-09-28 03:09:06', '2017-10-13 10:38:34', '2017-12-20 23:37:18', 2, 8);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Buy new dining room table and chairs', 'Ikea has some on sale', '2017-09-21 12:02:34', '2017-10-02 02:05:11', '2017-12-06 00:14:30', 1, 3);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Renew buscard', '3 zones', '2017-10-07 22:47:51', '2017-10-09 15:50:03', '2017-12-01 14:25:40', 2, 6);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Sign up for linkedin', 'Make the CV awesome! 😄', '2017-09-04 00:57:47', '2017-10-18 18:07:48', '2017-12-07 23:04:38', 3, 2);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Remove facebook from phone', 'To avoid interruptions when working', '2017-10-26 17:15:07', '2017-10-13 03:36:47', '2017-12-19 11:10:02', 3, 4);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Backup databases to external disk', 'Remember to store the disk in another physical location', '2017-09-09 17:32:33', '2017-10-01 21:18:59', '2017-12-23 14:21:01', 1, 2);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Put up the new lamp in the hallway', NULL, '2017-10-15 05:45:54', '2017-10-16 14:05:35', '2017-12-29 02:29:26', 3, 3);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ('Hang up paintings in living room', NULL, '2017-09-10 05:36:11', '2017-10-09 17:40:42', null, 3, 4);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Buy plane ticket to Auckland', 'Check prices online first!', '2017-09-05 09:07:22', '2017-10-15 09:36:06', '2017-12-07 11:10:05', 1, 9);
insert into task ( title, description, created, updated, due_date, status_id, user_id) values ( 'Learn about NoSQL databases', 'MongoDB, CouchDB, etc.', '2017-10-20 01:41:53', '2017-10-04 07:19:56', '2017-12-23 10:13:42', 2, NULL);



