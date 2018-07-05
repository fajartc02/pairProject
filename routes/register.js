const router = require('express').Router()
const Model = require('../models')


router.get('/', (req, res) => {
    // res.send('Connected with Login')
    res.render('register.ejs', {message: null})
})

router.post('/', (req, res) => {
    // res.send('login Successfully')
    let username = req.body.username
    let password = req.body.password
    let rePassword = req.body.repassword
    
    Model.User.confirmPassword(password, rePassword, match => {
        if(match) {
            var bcrypt = require('bcrypt');
            const saltRounds = 5;
            const myPlaintextPassword = password;

            var salt = bcrypt.genSaltSync(saltRounds);
            var hash = bcrypt.hashSync(myPlaintextPassword, salt);
            
            Model.User.create({
                username: username,
                password: hash,
                salt: salt
            })
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {
                res.render('register.ejs', {message: err})
            })
        } else {
            // res.send('password Does not match!!')
            res.render('register.ejs', {message: 'Your Password does not match !'})
        }
    })
})


module.exports = router

// bcrypt.compareSync(myPlaintextPassword, hash); pass