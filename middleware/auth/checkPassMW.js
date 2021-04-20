/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /companys
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'password') {
            req.session.belepve = true;
            return req.session.save(err => res.redirect('/companys'));
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};