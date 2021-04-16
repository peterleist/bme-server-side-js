/**
 * Load all cooler from the database
 * The result is saved to res.locals.coolers
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CoolerModel = requireOption(objectrepository, 'CoolerModel');

    return function(req, res, next) {
        res.locals.coolers = [];
        if (typeof res.locals.company === 'undefined') {
            return next();
        }

        CoolerModel.find({ _owner: res.locals.company._id }, (err, coolers) => {
            if (err) {
                return next(err);
            }
            res.locals.coolers = coolers;
            return next();
        });
    };
};