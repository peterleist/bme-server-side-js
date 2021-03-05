/**
 * Load a company from the database using the :companyid param
 * The result is saved to res.locals.company
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CompanyModel = requireOption(objectrepository, 'CompanyModel');

    return function(req, res, next) {
        console.log(req.params);

        CompanyModel.findOne({ _id: req.params.companyid }, (err, company) => {
            if (err || !company) {
                return next(err);
            }

            res.locals.company = company;
            return next();
        });
    };
};