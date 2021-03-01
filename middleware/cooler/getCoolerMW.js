/**
 * Load a befott from the database using the :coolerid param
 * The result is saved to res.locals.cooler
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};