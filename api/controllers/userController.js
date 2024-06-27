const UserModel = require('../models/users');
const SignUpJoi = require('../validations/signUpJoi');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'fdsofjofdsafass';

const SignUp = async (req, res) => {
    const data = req.body
    await SignUpJoi.validateAsync(data);
    const email = data.email
    const password = data.password
    const userDoc = await UserModel.create({
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });

    await userDoc.save();
    res.status(200).send("User added successfully");
}


const Login = async (req, res) => {
    const data = req.body
    await SignUpJoi.validateAsync(data);
    const email = data.email
    const password = data.password

    const userDoc = await UserModel.findOne({ email });
    if (userDoc) {
        const passOk = bcrypt.compareSync(password, userDoc.password);
        console.log(passOk);
        if (passOk) {
            jwt.sign({
                email: userDoc.email,
                id: userDoc._id,
                name: userDoc.name
            }, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(userDoc);
            });
        } else {
            res.status(422).json('Password incorrect');
        }
    } else {
        res.json('User not found');
    }

    res.status(200).send({ status: true, mesage: "Success" });
}

module.exports = { SignUp, Login }