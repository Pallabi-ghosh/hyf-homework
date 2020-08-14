

create schema edu_system;

use edu_system;
select * from user;
select * from status;
select * from task;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id --

insert into user (id, name, email, phone) values (1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
insert into user ( name, email, phone) values ('Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
insert into status (id, name) values (1, 'Not started');
insert into status ( name) values ( 'Not started');
-- Mark a task as complete --
update status set name = 'Mark completed' where id = 2;

insert into task (title, description, created, updated, due_date, status_id, user_id) values('pasta cooking', 'pasta, chease, chilli memo','2017-10-25 06:54:16','2020-08-11 10:18:15','2025-10-10 11:20:57', 1, 1);
insert into task (id, title, description, created, updated, due_date, status_id, user_id) values (1, 'Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2, 1);

-- Change the title of a task --
update task set title = 'Chicken cooking' where id = 3;
-- Change a task due date --
update task set due_date = '2010-10-22 09:54:34' where id = 3;
-- Change a task status --
update task set status_id = 2 where id = 3;
-- Mark a task as complete --
update task set status_id = 1 where id = 3;
-- Delete a task --
delete from task where id = 1;


