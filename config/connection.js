const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sociogramDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
