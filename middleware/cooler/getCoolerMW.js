/**
 * Load a cooler from the database using the :coolerid param
 * The result is saved to res.locals.cooler
 */
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CoolerModel = requireOption(objectrepository, 'CoolerModel');

    return function(req, res, next) {
        CoolerModel.findOne({ _id: req.params.coolerid }, (err, cooler) => {
            if (err || !cooler) {
                return next(err)
            }

            res.locals.cooler = cooler;
            return next();
        })
    };
};