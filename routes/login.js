const router = require('express').Router()
const Models = require('../models')
const Users = Models.User



router.get('/', (req, res) => {
    res.render('login.ejs')
})

router.post('/', (req, res) => {
    let userName = req.body.username
    let password = req.body.password
    Users.find({
        where: {
            username: userName
        }
    })
    .then(dataUser => {
        const bcrypt = require('bcrypt');
        let salt = dataUser.salt
        let resultPass = bcrypt.hashSync(password, salt);
        // console.log(resultPass);
        // console.log(dataUser.password);
        if(resultPass === dataUser.password) {
            req.session.username = dataUser.username
            res.render('homepage.ejs')
        }
    })
})



module.exports = router