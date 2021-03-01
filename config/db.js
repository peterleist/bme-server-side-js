const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/CoolerManager', { useNewUrlParser: true });

module.exports = mongoose;