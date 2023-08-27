"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const townSchema = require('./town');
const lgaSchema = require('./lga');
const politicsSchema = require('./politics');
const schemaTypes = require("./schema_types");

/**************************************************
 ************* State Model or collection ***********
 **************************************************/

const stateSchema = new Schema({
    name: {
        type : String, 
        require: true,
    }, 
    capital: {
        type: String, 
        require : true, 
    }, 
    state_code: {
        type: String, 
        require : true,
    }, 
    creation_date: {
        type : String, 
        default: null
    }, 
    location: {
            type: schemaTypes.location, 
            default: null,
    },
    total_area: {
        type: String, 
        default: null, 
    }, 
    population: {
        type: Number, 
        default: null
    },
    postal_code: {
        type: Number, 
        default: null
    },
    bordering_states: {
        type: [String], 
        default: null,
    },
    // Administrative Divisions 
    lgas: {
        type: [lgaSchema], 
        default: null,
    },
    towns: {
        type: [townSchema], 
        default: null,
    },
    // Natural Resources 
    national_resources: {
        type: [String], 
        default: null,
    },
    // Government and Politics 
    politics: {
        type: politicsSchema, 
        default: null,
    },
    // Education 
    universities: {
        type: [String], 
        default: null
    },
    polytechnics: {
        type: [String], 
        default: null
    },
    // Infrastructure / Airports
    airports: {
        type: [String], 
        default: null,
    },
    // Healthcare
    hospitals: {
        type: [String], 
        default: null,
    },
    // Langugages and Ethnic Groups 
    languages: {
        type: [String], 
        default: null,
    },
    ethnic_groups : {
        type: [String], 
        default: null,
    }, 
    // Religion 
    religions : {
        type:  [String], 
        default: null,
    }
}, 
{
    versionKey: false,
});

module.exports = mongoose.model("State", stateSchema);