"use strict";

const model = require("../models")

/**************************************************
 ***** State controller for user business logic ****
 **************************************************/

let stateController = {};
// model initiation
const State = model.stateModel;

 stateController.all = async (req, res) => {
   try {
      let _state = await State.find();
      res.status(200).json(_state);
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
 }

 stateController.states = async (req, res) => {
   try {
      //filter out other fields 
      let _state = await State.find().select(
         [
            'name',
            'location',
            'creation_date',
            'postal_code', 
            'capital', 
            'state_code', 
            'total_area', 
            'population', 
            'dominant_religion'
         ]).exec();
      res.status(200).json(_state);
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
 }

 stateController.towns = async (req, res) => {
    let state_code = req.params.status_code;
    try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let towns = _state['towns'];
      if(towns){
         res.status(200).json(towns)
      }else{
         res.status(200).json({message: "Town is Empty. We are open to contributions at https://vercel.com. Thank you!"});
      }
   } catch (_) {
      console.log(`Error ${_}`);
      res.status(500).json({message: "Server Error"});
   }
 }

 stateController.lgas = async (req, res) => {
   let state_code = req.params;
      try {
      let _state = State();
      _state.name = "Abuja";
      _state.state_code = 'ABJ';
      await _state.save();
   } catch (_) {
      console.log(`Error ${_}`);
   }
   res.json({status: 200, message: "OK"});
 }
 stateController.resources = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.politics = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.universities = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.polytechnics = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.airports = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.hospitals = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.languages = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}

stateController.ethnicity = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}
 
stateController.religion = (req, res) => {
   let state_code = req.params;
   res.json({status: 200, message: "OK"});
}
 
/* export userControllers */
 module.exports = stateController;