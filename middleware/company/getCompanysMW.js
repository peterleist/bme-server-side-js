/**
 * Load all company from the database
 * The result is saved to res.locals.company
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};