/**
 * Removes a cooler from the database, the entity used here is: res.locals.cooler
 * Redirects to /companys/:companyid after delete
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        next();
    };
};