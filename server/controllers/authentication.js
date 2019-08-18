const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function (req, res, next) {
    // give the user a token
    res.send({token: tokenForUser(req.user)});
};

exports.signup = function (req, res, next) {
    //check the user: if it exists => return err
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({
            error: "You must provide an email and password"
        })
    }

    User.findOne({email: email}, function (err, existingUser) {
        if (err) {
            return next(err);
        }
        if (existingUser) {
            return res.status(422).send({
                error: 'Email is already in use'
            }); //unprocessable entity
        }

        // if it not exists: create and save user and respond to request
        const user = new User({
            email: email,
            password: password
        });

        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.json({
                token: tokenForUser(user)
            });
        });
    });


};