"use strict";

const mongoose = require('mongoose');

//Object of location

const location = new mongoose.Schema(
    {
        latitude: mongoose.Decimal128, 
        longitude: mongoose.Decimal128
    }
    );

module.exports = location;