"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaTypes = require("./schema_types");

/**************************************************
 ************* LGA Model or collection ***********
 **************************************************/

const lgaSchema = new Schema({
    name: {
        type: String, 
        require : true,
    }, 
    lga_code: {
        type: String, 
        require: true,
    },
    location: {
        type: schemaTypes.location, 
        default: null,
    },
    total_area: {
        type: String, 
        default: null, 
    }, 
    postal_code: {
        type: Number, 
        default: null,
    }, 
    population: {
        type: Number, 
        default: null,
    }, 
    creation_date: {
        type: String, 
        default: null,
    }
}, {
    _id: false,
});

module.exports = lgaSchema;