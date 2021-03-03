  /**
   * Using POST params update or save a company to the database
   * If res.locals.company is there, it's an update otherwise this middleware creates an entity
   * Redirects to /company/:companyid after success
   */
  const requireOption = require('../requireOption');

  module.exports = function(objectrepository) {
      const CompanyModel = requireOption(objectrepository, 'CompanyModel');

      return function(req, res, next) {
          if (typeof res.locals.company === 'undefined') {
              res.locals.company = new CompanyModel();
          }

          res.locals.company.name = req.body.cp_name;
          res.locals.company.email = req.body.email;
          res.locals.company.address = req.body.addr;
          res.locals.company.city = req.body.city;
          res.locals.company.zip = req.body.zip;
          res.locals.company.state = req.body.state;
          res.locals.company.desc = req.body.desc;

          res.locals.company.save(err => {
              if (err) {
                  return next(err);
              }

              return res.redirect('/companys');
          });

      };
  };