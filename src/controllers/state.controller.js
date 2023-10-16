"use strict";

const model = require("../models")
const constants = require('../utils/constants')

/**************************************************
 ***** State controller for user business logic ****
 **************************************************/

let stateController = {};
// model initiation
const State = model.stateModel;

 stateController.all = async (req, res) => {
   try {
      let _state = await State.find();
      const raw = _state.map((state) => {
         const {_id, name, capital, towns, lgas, state_code, creation_date, location, total_area, population, postal_code, bordering_states, national_resources, politics, universities, polytechnics, airports, hospitals, languages, ethnic_groups, religions} = state;
         return {name, capital, state_code, creation_date, location, total_area, population, towns, lgas, postal_code, bordering_states, national_resources, politics, universities, polytechnics, airports, hospitals, languages, ethnic_groups, religions};
      });
      res.status(200).json(raw);
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
            'religions'
         ]).exec();
         
      const raw = _state.map((state) => {
         const {_id, name, capital, state_code, creation_date, location, total_area, population, postal_code, religions} = state;
         return {name, capital, state_code, creation_date, location, total_area, population, postal_code, religions};
      });

      res.status(200).json(raw);
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
 }

 stateController.towns = async (req, res) => {
    let state_code = req.params.state_code;
    try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let towns = _state['towns'];
      if(towns){
         res.status(200).json(towns)
      }else{
         res.status(200).json({message: `Town is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error", state_code});
   }
 }

 stateController.lgas = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let lgas = _state['lgas'];
      if(lgas){
         res.status(200).json(lgas)
      }else{
         res.status(200).json({message: `Local Government Area is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
 }
 stateController.resources = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let resources = _state['national_resources'];
      if(resources){
         res.status(200).json(resources)
      }else{
         res.status(200).json({message: `National Resources is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.politics =  async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let politics = _state['politics'];
      if(politics){
         res.status(200).json(politics)
      }else{
         res.status(200).json({message: `Politic is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.universities = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let universities = _state['universities'];
      if(universities){
         res.status(200).json(universities)
      }else{
         res.status(200).json({message: `University is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.polytechnics = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let polytechnics = _state['polytechnics'];
      if(polytechnics){
         res.status(200).json(polytechnics)
      }else{
         res.status(200).json({message: `Polytechic is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.airports = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let airports = _state['airports'];
      if(airports){
         res.status(200).json(airports)
      }else{
         res.status(200).json({message: `Airport is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.hospitals = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let hospitals = _state['hospitals'];
      if(hospitals){
         res.status(200).json(hospitals)
      }else{
         res.status(200).json({message: `Hospital is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.languages = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let languages = _state['languages'];
      if(languages){
         res.status(200).json(languages)
      }else{
         res.status(200).json({message: `Language is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}

stateController.ethnicity = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let ethnic_groups = _state['ethnic_groups'];
      if(ethnic_groups){
         res.status(200).json(ethnic_groups)
      }else{
         res.status(200).json({message: `Ethnic Group is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}
 
stateController.religion = async (req, res) => {
   let state_code = req.params.state_code;
   try {
      let _state = await State.findOne({state_code : state_code}).exec();
      let religions = _state['religions'];
      if(religions){
         res.status(200).json(religions)
      }else{
         res.status(200).json({message: `Religion is Empty. We are open to contributions at ${constants.SERVER.APP_URL}. Thank you!`});
      }
   } catch (_) {
      res.status(500).json({message: "Server Error"});
   }
}
 
/* export userControllers */
 module.exports = stateController;