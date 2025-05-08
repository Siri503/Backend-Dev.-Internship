const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
});

module.exports = mongoose.model('Activity', ActivitySchema);
