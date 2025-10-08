const client = require('../db');


//get all users
async function getAllUsers(){
    const res = await client.query('SELECT * FROM users');
    return res.rows;
}

//get user by id
async function getUserByID(id){
    const res = await client.query('SELECT * FROM users WHERE id = $1',[id]);
    return res.rows[0];
}

//create a user
async function createUser(name,email,age){
    const res = await client.query('INSERT INTO users(name,email,age) VALUES ($1,$2,$3) RETURNING *',[name,email,age])
    return res.rows[0];
}

//Update user
async function updateUser(id,name,email,age){
    const res = await client.query('UPDATE users SET name = $1, email = $2, age = $3 WHERE id=$4 RETURNING * ',[name,email,age,id]);
    return res.rows[0];
}

// delete user
async function deleteUser(id){
    const res = await client.query('DELETE FROM users WHERE id = $1 RETURNING *',[id]);
    return res.rows[0];
}

module.exports = {getAllUsers, getUserByID, createUser, updateUser, deleteUser};
