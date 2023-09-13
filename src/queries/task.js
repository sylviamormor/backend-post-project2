const createTask = `
INSERT INTO tasks (
    title,
    description,
    completed,
    user_id
) VALUES ($1, $2, $3, $4) RETURNING id, title, description, user_id
`;

const fetchAllTasks = `
SELECT
    t.id,
    t.title,
    t.description,
    t.completed,
    json_build_object(
        'id', u.id,
        'email', u.email
    ) as task
FROM
    tasks t
INNER JOIN
    users u on t.user_id = u.id
`;


const fetchTasksByUser = `
SELECT id, title, description, completed FROM tasks WHERE user_id=$1
`;

const editTask = `
UPDATE Tasks
SET title=$1, description=$2
WHERE id=$3
RETURNING *
`;

const fetchTaskById = `SELECT user_id FROM tasks WHERE id=$1`;

module.exports = {
    createTask,
    fetchAllTasks,
    fetchTasksByUser,
    editTask,
    fetchTaskById,
};
