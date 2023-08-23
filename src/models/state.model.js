"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**************************************************
 ************* State Model or collection ***********
 **************************************************/

const state_schema = new Schema({
    name: {
        type : String, 
        require: true,
    }, 
    
});

module.exports = mongoose.model("State", state_schema);