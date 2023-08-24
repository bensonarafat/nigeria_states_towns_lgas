"use strict";
const model = require('../models')

/**************************************************
 ***** Weclome controller for user business logic ****
 **************************************************/
 let welcomeController      = {};

 welcomeController.welcome = async (req, res) => {

       try {
              let state = new model.stateModel();
              state.name = "Abuja";
              state.location.latitude = "test";
              state.location.longitude = "test2";
              await state.save();
       } catch (_) {
              console.log(`Error ${_}`);
       }


        res.json({status: 200, message: "OK"});
 };


/* export userControllers */
module.exports = welcomeController;