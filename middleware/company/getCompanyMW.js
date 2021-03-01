/**
 * Load a company from the database using the :companyid param
 * The result is saved to res.locals.company
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};