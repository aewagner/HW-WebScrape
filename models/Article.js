'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var articleSchema = mongoose.Schema({

    title: {
        type: String,
    },
    link: {
        type: String,
    },
    saved: {
        type: Boolean,
        default: false
    },
    note: [{
            body: String,
        }]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Article', articleSchema);