"use strict";

const mongoose = require('mongoose');

//Object of location

const location = new mongoose.Schema(
    {
        latitude: String, 
        longitude: String
    }, 
    {
        _id: false,
    }
    );

module.exports = location;