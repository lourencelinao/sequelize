const express = require('express')
const router = express.Router()

// controllers
const { getUsers, getUser, postUser, updateUser, deleteUser } = require('../controllers/users')

// get all user
router.get('/', getUsers)

// get single user
router.get('/:id', getUser)

// post
router.post('/', postUser)

// update User
router.put('/:id', updateUser)

// delete User
router.delete('/:id', deleteUser)

module.exports = router