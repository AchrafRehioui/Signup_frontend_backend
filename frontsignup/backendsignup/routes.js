const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModels');

router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({

    })
})

module.exports = router