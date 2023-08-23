'use strict';

/*******************************
 *** MONGOOSE for connection ***
 *******************************/
let mongoose = require("mongoose");

/*******************************
 ***** Mongodb connection  *****
 *******************************/

 module.exports= (url) => {
    return new Promise(( resolve, reject) => {
        mongoose.connect(url).then(() => {
            resolve(null)
        }).catch((err) => {
            reject(err);
        });
    })
 }