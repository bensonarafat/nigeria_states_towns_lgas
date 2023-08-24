"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schemaTypes = require('./schema_types');
const townSchema = require('./town');
const lgaSchema = require('./lga');
const politicsSchema = require('./politics');


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
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    },
    // Administrative Divisions 
    lgas: {
        type: lgaSchema, 
        default: null,
    },
    towns: {
        type: townSchema, 
        default: null,
    },
    // Natural Resources 
    national_resources: {
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    },
    // Government and Politics 
    politics: {
        type: politicsSchema, 
        default: null,
    },
    // Education 
    universities: {
        type: [schemaTypes.ArrayTypeString], 
        default: null
    },
    polytechnics: {
        type: [schemaTypes.ArrayTypeString], 
        default: null
    },
    // Infrastructure / Airports
    airports: {
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    },
    // Healthcare
    hospitals: {
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    },
    // Langugages and Ethnic Groups 
    languages: {
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    },
    ethnic_groups : {
        type: [schemaTypes.ArrayTypeString], 
        default: null,
    }, 
    // Religion 
    dominant_religion : {
        type:  String, 
        default: null,
    }
}, 
{
    versionKey: false,
});

module.exports = mongoose.model("State", stateSchema);