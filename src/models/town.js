"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaTypes = require("./schema_types");

/**************************************************
 ************* Town Model or collection ***********
 **************************************************/

const townSchema = new Schema({
    name: {
        type: String, 
        require: true, 
    }, 
    location: {
        type: schemaTypes.location, 
        default: null,
    },
    population: {
        type: Number,
        default: null
    },
    postal_code: {
        type: String, 
        default: null, 

    }, 
    total_area: {
        type: String, 
        default: null
    }, 
    creation_date: {
        type: String, 
        default: null
    }
}, {
    _id: false,
});

module.exports = townSchema;