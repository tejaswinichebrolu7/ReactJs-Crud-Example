var mongoose = require('mongoose');

var HackathonSchema = new mongoose.Schema({
  id: String,
  name: String,
  status: String,
  startDate: Date,
  endDate: Date,
  emailAddress: String,
});

module.exports = mongoose.model('Hackathon', HackathonSchema);
