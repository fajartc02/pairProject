const router = require('express').Router()
//name folder will be require

router.get('/', (req, res) => {
    // res.send('connected with routes')
    res.render('homepage.ejs')
})


module.exports = router