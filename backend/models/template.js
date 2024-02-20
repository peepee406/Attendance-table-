// models/template.js

const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  roll: { type: String, required: true },
});

module.exports = mongoose.model('Template', templateSchema);
