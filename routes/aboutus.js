const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('aboutus/index')
})

module.exports = router

