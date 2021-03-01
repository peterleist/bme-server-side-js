/**
 * Removes a company from the database, the entity used here is: res.locals.company
 * Redirects to /companys after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.company === 'undefined') {
            return next();
        }

        res.locals.company.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/companys');
        });
    };
};