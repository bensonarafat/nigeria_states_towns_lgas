"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**************************************************
 ************* LGA Model or collection ***********
 **************************************************/

const lga_schema = new Schema({
    name: {
        type : String, 
        require: true,
    }, 
    
});

module.exports = mongoose.model("Lga", lga_schema);