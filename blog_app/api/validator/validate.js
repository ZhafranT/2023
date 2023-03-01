const { body, validationResult } = require('express-validator');

const rules = [
    body('username').not().isEmpty().trim().trim().escape().withMessage('username already use'),
    body('email').isEmail().normalizeEmail().trim().escape().withMessage('email not true email'),
    body('password').isLength({ min: 5 }).trim().escape().withMessage('must be at least 5 chars long'),
]

const validate = [
    rules,
    (req,res,next) => {
        
    }
]