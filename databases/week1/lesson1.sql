SELECT * FROM task;
-- Find out how many tasks are in the task table --
SELECT COUNT(id)FROM task
WHERE due_date IS NULL;
-- Find all the tasks that are marked as done --
SELECT * FROM task
WHERE status_id = 3;
SELECT * FROM status;
SELECT * FROM task
WHERE status_id IS NULL;
-- Get the title and due date of all tasks where the title or description contains database --
SELECT * FROM task
WHERE description or title LIKE '%database%';
-- Get the title and status (as text) of all tasks --
SELECT task.title,status.name FROM task JOIN status ON task.status_id=status.id;
-- Get the name of each status, along with a count of how many tasks have that status --
select task.*, count(title) as status_id
from task
  left join title on gists.id = stars.gist_id;

