'use strict';

/********************************
 **** Managing all the routes ***
 ********* independently ********
 ********************************/

module.exports = (app) => {
    require("./v1")(app)
}