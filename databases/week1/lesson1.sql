SELECT * FROM task;
-- Find out how many tasks are in the task table --
SELECT COUNT(id)FROM task
WHERE due_date IS NULL;
-- Find all the tasks that are marked as done --
SELECT * FROM task
WHERE status_id = 3;
SELECT * FROM status;
SELECT * FROM task
WHERE status_id IS NOT;
-- Get the title and due date of all tasks where the title or description contains database --
SELECT 
    id,
    title, 
    description,
    due_date 
FROM task 
WHERE title LIKE '%database%' OR description LIKE '%database%';
-- Get the title and status (as text) of all tasks --
SELECT 
	status.id, 
    task.title, 
    status.name 
FROM task JOIN status ON task.status_id = status.id;
-- Get the name of each status, along with a count of how many tasks have that status --
SELECT 
	status.name, 
    COUNT(status.name) 
AS 
	count 
FROM 
	status 
JOIN task ON status.id = task.status_id GROUP BY status.name;

-- Get the names of all statuses, sorted by the status with most tasks first
SELECT 
	status.name, 
    COUNT(status.name) 
AS 
	count
FROM 
	status 
JOIN 
	task  
ON 
	status.id = task.status_id 
GROUP BY status.name ORDER BY count DESC;

