"use strict";


/**************************************************
 ***** Weclome controller for user business logic ****
 **************************************************/
 let welcomeController      = {};

 welcomeController.welcome = (req, res) => {
        res.json({status: 200, message: "OK"});
 };


/* export userControllers */
module.exports = welcomeController;