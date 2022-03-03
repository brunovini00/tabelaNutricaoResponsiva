const express = require('express')

const User = require('../models/User')

const router = express.Router()

router.post('/user', async (req, res) => {
    console.log(req.body);
})

module.exports = router