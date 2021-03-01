var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Cooler = db.model('Cooler', {
    name: String,
    type: String,
    status: String,
    date: Date,
    _owner: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    }
});

module.exports = Cooler;