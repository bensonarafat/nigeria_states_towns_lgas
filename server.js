'use strict';

/***********************************
 * www.js is a file from where our *
 * server is running  **************
 ***********************************/
let www = require('./bin/www.js');

/***********************************
 * dbConnection.js is a file from **
 * where we are connecting our *****
 * mongodb database  **************
 ***********************************/
let db = require('./bin/db.connection.js');

/***********************************
 * dbConfig.js is a file from we ***
 ****** are getting mongodb ********
 ********* configurations **********
 ***********************************/
let dbConfig = require('./src/configs/db.config.js');

/***********************************
 * Database conectinvity before ****
 ***** running server (www()) ******
 ***********************************/
db(dbConfig.mongodb.url).then(resolve => {
    console.log(`*************** DB is connected successfully **************`);
    www();
}).catch(err => {
    console.log(`*********** Error ${err} *******`);
});