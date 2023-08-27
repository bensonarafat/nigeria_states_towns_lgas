"use strict";

/************* Modules ***********/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**************************************************
 ************* politicsSchema or collection ***********
 **************************************************/

const politicsSchema = new Schema({
    governor : {
        type: String, 
        default: null,
    }, 
    deputy_governor: {
        type: String, 
        default: null, 
    }, 
}, {
    _id: false
});

module.exports = politicsSchema;