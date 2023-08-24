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
}