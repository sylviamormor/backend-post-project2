/**
 * Add New User
 */
const addUser = `
 INSERT INTO users (
    email,
    password
 )
 VALUES ($1, $2) RETURNING id, email, created_at
`;
const findUserByEmail = `
 SELECT id, email, password FROM users 
 WHERE email=$1
`;

const getAllUsers = `
        SELECT * FROM users
`
const getSingleUser = `
        SELECT id, email,
        FROM users WHERE id=$1
`;

// const updateUserById = `
//         UPDATE users
//         SET names = $1, email = $2
//         WHERE id = $3
//         RETURNING id, names, email, role
// `;
module.exports = {
    addUser,
    findUserByEmail,
    getAllUsers,
    getSingleUser,
    
}