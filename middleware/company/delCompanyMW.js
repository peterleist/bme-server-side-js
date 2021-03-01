/**
 * Removes a company from the database, the entity used here is: res.locals.company
 * Redirects to /companys after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};