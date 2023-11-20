const express = require('express')
const bodyParser = require('body-parser')
const user = require('../models/user')
const jwt = require('jsonwebtoken')

const router = express.Router();
router.use(bodyParser.json())

router.post('/register', (req,res) => {
    const userData = req.body
    user.createUser(userData, (err, result) => {
        if(err) {
            return res.status(500).json({error: 'internal server error'})
        }

        return res.status(201).json({message: 'user created succesfully'})
    })
})

router.post('/login', (req, res) => {
    const userData = req.body
    user.authUser(userData, (err, result) => {
        if(err) {
            return res.status(500).json({message: 'internal server error'})
        }

        if(result > 0) {
            const user = result[0];
            const token = jwt.sign({userId: user.id, username: user.username}, 'massive12345', {expiresIn: '1h'})
            res.json({token})
        } else {
            res.status(401).json({message: 'invalid username or password'})
        }
    })
})


module.exports = router