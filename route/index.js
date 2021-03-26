  const authMW = require('../middleware/auth/authMW');
  const logOutMW = require('../middleware/auth/logOutMW');
  const checkPassMW = require('../middleware/auth/checkPassMW');
  const renderMW = require('../middleware/renderMW');
  const delCoolerMW = require('../middleware/cooler/delCoolerMW');
  const getCoolersMW = require('../middleware/cooler/getCoolersMW');
  const getCoolerMW = require('../middleware/cooler/getCoolerMW');
  const saveCoolerMW = require('../middleware/cooler/saveCoolerMW');
  const delCompanyMW = require('../middleware/company/delCompanyMW');
  const getCompanysMW = require('../middleware/company/getCompanysMW');
  const getCompanyMW = require('../middleware/company/getCompanyMW');
  const saveCompanyMW = require('../middleware/company/saveCompanyMW');

  const CompanyModel = require('../models/company');
  const CoolerModel = require('../models/cooler');

  module.exports = function(app) {
      const objRepo = {
          CompanyModel: CompanyModel,
          CoolerModel: CoolerModel
      };

      app.get('/companys',
          authMW(objRepo),
          getCompanysMW(objRepo),
          renderMW(objRepo, 'company_main'));

      app.use('/companys/new',
          authMW(objRepo),
          renderMW(objRepo, 'company_add'));

      app.use('/companys/add',
          authMW(objRepo),
          saveCompanyMW(objRepo),
          getCompanysMW(objRepo),
          renderMW(objRepo, 'company_main'));

      app.use('/company/edit/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          saveCompanyMW(objRepo),
          getCoolersMW(objRepo),
          renderMW(objRepo, 'company_details'));

      app.get('/company/del/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          delCompanyMW(objRepo),
          renderMW(objRepo, 'company_main'));

      app.get('/coolers/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolersMW(objRepo),
          renderMW(objRepo, 'company_details'));

      app.get('/cooler/:coolerid',
          authMW(objRepo),
          getCoolerMW(objRepo),
          renderMW(objRepo, 'cooler_edit'));

      app.use('/cooler/:companyid/new',
          authMW(objRepo),
          getCompanyMW(objRepo),
          saveCoolerMW(objRepo),
          getCoolersMW(objRepo),
          renderMW(objRepo, 'company_details'));

      app.use('/cooler/edit/:coolerid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolerMW(objRepo),
          saveCoolerMW(objRepo),
          renderMW(objRepo, 'company_details'));

      app.get('/cooler/del/:coolerid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolerMW(objRepo),
          delCoolerMW(objRepo),
          renderMW(objRepo, 'company_details'));

      app.use('/logout', logOutMW(objRepo));

      app.use('/',
          checkPassMW(objRepo),
          renderMW(objRepo, 'index'));

  };