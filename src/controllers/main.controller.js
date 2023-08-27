"use strict";

const model = require("../models")

/**************************************************
 ***** Main controller for user business logic ****
 **************************************************/

const mainController = {};
// model initiation
const State = model.stateModel;

mainController.add = async (req, res) => {
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const capital = req.body.capital;
    const state_code = req.body.state_code;
    const total_area = req.body.total_area;
    const population = req.body.population;
    const postal_code = req.body.postal_code;
    const creation_date = req.body.creation_date;
    const location = {
        latitude,
        longitude
    }
    try {
        if(name && state_code && capital){
            let state = new State();
            state.name = name;
            state.location = location;
            state.capital = capital;
            state.state_code = state_code;
            state.total_area = total_area;
            state.population = population;
            state.postal_code = postal_code;
            state.creation_date = creation_date;
            await state.save();
            res.status(200).json({message: "State Added"});
        }else{
            res.status(204).json({message: "No Content"});
        }

    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}
mainController.update = async (req, res) => {
    const name = req.body.name;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const capital = req.body.capital;
    const state_code = req.body.state_code;
    const total_area = req.body.total_area;
    const population = req.body.population;
    const postal_code = req.body.postal_code;
    const creation_date = req.body.creation_date;
    const id = req.params.id;
    const location = {
        latitude,
        longitude
    }
    try {
        const response = await State.updateOne(
            {
                _id : id
            }
            ).set({
                name : name, 
                location: location,
                capital : capital,
                state_code : state_code, 
                total_area : total_area, 
                population : population, 
                postal_code : postal_code,
                creation_date: creation_date,
            });
        res.status(200).json({message: "State Updated" , data : response});
    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}

mainController.delete = async (req, res) => {
    try {
        const response = await State.deleteOne({_id : req.params.id});
        res.status(200).json({message: "State Deleted" , data : response});
    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}

mainController.addItems = async (req, res) => {
    try {
        const type = req.params.type;
        let obj = {};
        obj[type] = req.body.item;
        const response = await State.findOneAndUpdate({_id: req.params.id}, { $push: obj });
        res.status(200).json({message: "State Updated" , data : response});
    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}

mainController.removeItems = async (req, res) => {
    try {
        const type = req.params.type;
        let obj = {};
        obj[type] = req.body.item;
        const response = await State.findOneAndUpdate({_id : req.params.id}, { $pull : obj });
        res.status(200).json({message: "Item Removed" , data : response});
    }catch( _) {
        res.status(500).json({message: "Oops, there was an error"});
    }
}

mainController.addLga = async (req, res) => {
    try {
        
        let obj = {
            name : req.body.name, 
            total_area: req.body.total_area, 
            postal_code: req.body.postal_code,
            population: req.body.population,
            lga_code: req.body.lga_code,
            creation_date: req.body.creation_date,
            location : {
                latitude : req.body.latitude,
                longitude : req.body.longitude,
            }
        };
        const response = await State.findOneAndUpdate({_id : req.params.id}, {
            $push: { lgas: obj } 
        });
        res.status(200).json({message: "Local Goverment Area Added" , data : response});
    } catch (_) {
        
        res.status(500).json({message : "Oops, there was an error"});
    }
}

mainController.removeLga = async (req, res) => {
    try{
        let obj = {
            name : req.body.name, 
            total_area: req.body.total_area, 
            postal_code: req.body.postal_code,
            population: req.body.population,
            lga_code: req.body.lga_code,
            creation_date: req.body.creation_date,
            location : {
                latitude : req.body.latitude,
                longitude : req.body.longitude,
            }
        };
        const response = await State.findOneAndUpdate({_id : req.params.id}, {
            $pull: { lgas: obj } 
        });
        res.status(200).json({message: "Local Goverment Area Remove" , data : response});
    }catch(_){
        res.status(500).json({message: "Oops, there was an error"});
    }
}

mainController.addTown = async ( req, res) => {
    try {
        let obj = {
            name: req.body.name, 
            population: req.body.population, 
            postal_code : req.body.postal_code, 
            total_area: req.body.total_area,
            creation_date: req.body.creation_date,
            location : {
                latitude : req.body.latitude,
                longitude : req.body.longitude,
            }
        }
        const response = await State.findOneAndUpdate({_id : req.params.id}, {
            $push: { towns : obj } 
        });
        res.status(200).json({message: "Town Added" , data : response});
    } catch (_) {
       
        res.status(500).json({message : "Oops, there was an error"});
    }
}

mainController.removeTown = async ( req, res) => {
    try {
        let obj = {
            name: req.body.name, 
            population: req.body.population, 
            postal_code : req.body.postal_code, 
            total_area: req.body.total_area,
            creation_date: req.body.creation_date,
            location : {
                latitude : req.body.latitude,
                longitude : req.body.longitude,
            }
        }
        const response = await State.findOneAndUpdate({_id : req.params.id}, {
            $pull: { towns : obj } 
        });
        res.status(200).json({message: "Town Removed" , data : response});
    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}



mainController.addPolitics = async (req, res ) => {
    try {
        const response = await State.findOneAndUpdate({_id : req.params.id} , { 
            politics: {
                governor: req.body.governor,
                deputy_governor: req.body.deputy_governor,
            }
        });
        res.status(200).json({message: "Politics Added" , data : response});
    } catch (_) {
        res.status(500).json({message : "Oops, there was an error"});
    }
}

module.exports = mainController;