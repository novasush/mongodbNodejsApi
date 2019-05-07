  'use strict';
  var mongoose = require('mongoose'); // Initialize mongodb
  var Schema = mongoose.Schema; //Setup schema variable here we are going to define our table

  var TaskSchema = new Schema({
    name: {
      type: String,
      required: 'You need to enter your task'
    },
    Created_date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [{
        type: String,
        enum: ['pending', 'ongoing', 'completed']
      }],
      default: ['pending']
    }
  });

  module.exports = mongoose.model('Tasks', TaskSchema); //Exporting task schema to task table in mongodb