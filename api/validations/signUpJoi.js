const Joi = require('joi');
const SignUpJoi = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*]{8,30}$'))
        .required()
        .messages({
            'string.pattern.base': 'Password must be between 8 and 30 characters and include letters, numbers, and special characters (!@#$%^&*).'
        })
});
module.exports = SignUpJoi;