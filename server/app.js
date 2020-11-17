const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// sequelize
const sequelize = require('./config/sequelize')
// Test connection
try {
	sequelize.authenticate()
	console.log('Connection has been established successfully.')
} catch (error) {
	console.error('Unable to connect to the database:', error)
}

app.get('/', (req, res) => {
    res.send('Test')
})

// user route
app.use('/users', require('./routes/users'))

const port = 3000
app.listen(port, console.log(`Listening at port ${port}`))