const router = require('express').Router();
const { SignUp, Login } = require('../../controllers/userController');
const asyncHandler = require('../../utils/asyncHandler');


router.post('/sign-up', asyncHandler(SignUp));

router.post('/log-in', asyncHandler(Login));



module.exports = router;