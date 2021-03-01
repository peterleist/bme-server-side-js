  /**
   * Using POST params update or save a company to the database
   * If res.locals.company is there, it's an update otherwise this middleware creates an entity
   * Redirects to /company/:companyid after success
   */
  const requireOption = require('../requireOption');

  module.exports = function(objectrepository) {
      return function(req, res, next) {
          next();
      };
  };