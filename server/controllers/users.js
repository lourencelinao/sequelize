// const sequelize = require('../config/sequelize')
const User = require('../models/users')


const getUser = async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.send(user)
}

const getUsers = (req, res) => {
    User.findAll()
        .then(users => {
            console.log(users)
            res.send(users)
        })
        .catch(error => console.error(error))
}

const postUser = async (req, res) => {
    await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
}

const updateUser = async (req, res) => {
    await User.update({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    },
    {
        where: {
            id: req.params.id
        }
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: 1
        }
    })

    res.send()
}


module.exports = {
    getUsers,
    getUser,
    postUser,
    updateUser,
    deleteUser
}