'use strict';

let controller = require("../../controllers")

/****************************************
 ***** Managing User Routes here ********
 ***** @param APP (express instance)*****
 ****************************************/
module.exports = (app) => {
    app.get("/api/welcome", [
        controller.welcomeController.welcome
    ])
}