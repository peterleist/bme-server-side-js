const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/H5DK7B', { useNewUrlParser: true });

module.exports = mongoose;