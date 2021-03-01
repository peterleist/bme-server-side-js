/**
 * Load all company from the database
 * The result is saved to res.locals.company
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CompanyModel = requireOption(objectrepository, 'CompanyModel');

    return function(req, res, next) {
        CompanyModel.find({}, (err, companies) => {
            if (err) {
                return next(err);
            }
            res.locals.companies = companies;
            return next();
        });
    };
};