"use strict";

const { Schema } = require('mongoose');
//Array type
const ArrayTypeString = new Schema({name: String}, {key : false});

module.exports = ArrayTypeString;