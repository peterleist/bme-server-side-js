/**
 * Using POST params update or save a cooler to the database
 * If res.locals.cooler is there, it's an update otherwise this middleware creates an entity
 * Redirects to /companys/:companyId after success
 */
const { now } = require('mongoose');
const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    const CoolerModel = requireOption(objectrepository, 'CoolerModel');

    return function(req, res, next) {

        if (typeof res.locals.cooler === 'undefined') {
            res.locals.cooler = new CoolerModel();
            res.locals.cooler.name = "New Cooler";
            res.locals.cooler.type = "Type";
            res.locals.cooler.status = "Status";
            let dateStr = new Date(now()).toISOString();
            res.locals.cooler._owner = res.locals.company._id;
            res.locals.cooler.date = dateStr;
        } else {
            res.locals.cooler.name = req.body.name;
            console.log(req.body.name);
            res.locals.cooler.type = req.body.type;
            res.locals.cooler.status = req.body.status;
            res.locals.cooler.date = req.body.date;
        }

        res.locals.cooler.save(err => {
            if (err) {
                return next(err);
            }
            return next();
        });
    };
};