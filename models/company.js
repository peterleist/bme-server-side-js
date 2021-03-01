var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Company = db.model('Company', {
    name: String,
    email: String,
    address: String,
    city: String,
    zip: String,
    state: String,
    desc: String,
});

module.exports = Company;