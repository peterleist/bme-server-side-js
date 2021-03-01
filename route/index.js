  const authMW = require('../middleware/auth/authMW');
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

  module.exports = function(app) {
      const objRepo = {};

      app.use('/',
          checkPassMW(objRepo),
          renderMW(objRepo, 'index'));

      app.get('/companys',
          authMW(objRepo),
          getCompanysMW(objRepo),
          renderMW(objRepo, 'companylist'));

      app.use('/companys/new',
          authMW(objRepo),
          saveCompanyMW(objRepo),
          renderMW(objRepo, 'companynew'));

      app.use('/company/edit/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          saveCompanyMW(objRepo),
          renderMW(objRepo, 'companydetails'));

      app.get('/company/del/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          delCompanyMW(objRepo));

      app.get('/cooler/:companyid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolerMW(objRepo),
          renderMW(objRepo, 'onecompanyscooles'));
      app.use('/cooler/:coolerid/new',
          authMW(objRepo),
          getCompanyMW(objRepo),
          saveCoolerMW(objRepo),
          renderMW(objRepo, 'cooleritem'));

      app.use('/cooler/:comapnyid/edit/:coolerid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolerMW(objRepo),
          saveCoolerMW(objRepo),
          renderMW(objRepo, 'cooleritem'));

      app.get('/cooler/:companyid/del/:coolerid',
          authMW(objRepo),
          getCompanyMW(objRepo),
          getCoolerMW(objRepo),
          delCoolerMW(objRepo),
          renderMW(objRepo, 'cooleritem'));
  };