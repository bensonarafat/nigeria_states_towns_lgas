"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**************************************************
 ************* City Model or collection ***********
 **************************************************/

const city_schema = new Schema({
    name: {
        type : String, 
        require: true,
    }, 
    
});

module.exports = mongoose.model("City", city_schema);