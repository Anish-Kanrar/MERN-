/*
// const catMe = require('cat-me')

// console.log(catMe());
const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == "/about") {
        res.end("The about page")
    }
    if (req.url == "/profile") {
        res.end("The profile page")
    }
    if (req.url == "/") {
        res.end("The home page")
    }

})

server.listen(3000)
*/

const express = require('express')
const morgan = require('morgan')
const app = express();
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))

app.set("view engine", 'ejs')

app.get('/',
    (req, res, next) => {
        const a = 5;
        const b = 10;
        console.log(a + b)

        next()

    }, (req, res) => {
        res.render('index')
    })

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body //destructuring

    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })

    res.send(newUser)
})

app.get('/get-users', (req, res) => {

    userModel.findOne({
        username: 'k'
    }).then((user) => {

        console.log(user)

        res.send(user)
    })
})

app.post('/get-form-data', (req, res) => {
    console.log(req.body)
    res.send('data received')
})

app.listen(3000)
