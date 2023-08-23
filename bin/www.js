/**
 * express server setup
 */
'use strict';
/***********************************
 **** node module defined here *****
 ***********************************/
const express = require("express");
const bodyParser = require('body-parser');
const filebundle = require('../filebundle');

/**creating express server app for server */
const app = express();

/********************************
 ***** Server Configuration *****
 ********************************/
app.set('port', process.env.PORT || filebundle.CONFIG.dbConfig.port);
app.use(express.static("client"));
app.use(bodyParser.json({'limit' : '50mb'}));
app.use(bodyParser.urlencoded({"limit": '50mb', extended : true}));

/*******************************
 *** For handling CORS Error ***
*******************************/
app.all('/*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Content-Type, api_key, Authorization, x-requested-with, Total-Count, Total-Pages, Error-Message');
    res.header('Access-Control-Allow-Methods','POST, GET, DELETE, PUT, OPTIONS');
    res.header('Access-Control-Max-Age',1800);
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

/*******************************
 ****** initializing routes ****
 *******************************/
require('../src/routes')(app);

/** server listening */
module.exports = () => {
    /** server is running here */
    app.listen(filebundle.CONFIG.dbConfig.port, () => {
        console.log(`Listening on ${filebundle.CONFIG.dbConfig.port} ..........................`);
    })
}