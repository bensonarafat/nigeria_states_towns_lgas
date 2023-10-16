'use strict';

let controller = require("../../controllers")

/****************************************
 ***** Managing User Routes here ********
 ***** @param APP (express instance)*****
 ****************************************/
module.exports = (app) => {
    app.get("/api/all", [
        controller.stateController.all
    ])
    app.get("/api/states", [
        controller.stateController.states
    ])
    app.get('/api/:state_code/towns', [
        controller.stateController.towns 
    ])
    app.get('/api/:state_code/lgas', [
        controller.stateController.lgas
    ])
    app.get('/api/:state_code/resources', [
        controller.stateController.resources
    ])
    app.get('/api/:state_code/politics', [
        controller.stateController.politics
    ])
    app.get('/api/:state_code/universities', [
        controller.stateController.universities
    ])
    app.get('/api/:state_code/polytechnics', [
        controller.stateController.polytechnics
    ])
    app.get('/api/:state_code/airports', [
        controller.stateController.airports
    ])
    app.get('/api/:state_code/hospitals', [
        controller.stateController.hospitals
    ])
    app.get('/api/:state_code/languages', [
        controller.stateController.languages
    ])
    app.get('/api/:state_code/ethnicity', [
        controller.stateController.ethnicity
    ])
    app.get('/api/:state_code/religion', [
        controller.stateController.religion
    ])

    // Main routes 
    app.get("/api/all-state", [
        controller.mainController.all
    ])
    app.post("/api/add-state", [
        controller.mainController.add
    ])
    app.put("/api/update-state/:id", [
        controller.mainController.update
    ])
    app.delete("/api/delete-state/:id", [
        controller.mainController.delete
    ]);
    app.put("/api/add-items/:type/:id", [
        controller.mainController.addItems
    ])
    app.put("/api/remove-items/:type/:id", [
        controller.mainController.removeItems
    ])
    
    app.put("/api/add-lga/:id", [
        controller.mainController.addLga
    ])

    app.put("/api/remove-lga/:id", [
        controller.mainController.removeLga
    ])

    app.put("/api/add-town/:id", [
        controller.mainController.addTown
    ])

    app.put("/api/remove-town/:id", [
        controller.mainController.removeTown
    ])

    app.post("/api/add-politics/:id", [
        controller.mainController.addPolitics
    ])
    app.get("/api/state/:id", [
        controller.mainController.states
    ])
}