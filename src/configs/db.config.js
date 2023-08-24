"use strict";

/******************************************
 ****** Default Server configuration ******
 ******************************************/
let serverConfig = {
    mongodb: {
        host: "127.0.0.1", 
        port: 27017, 
        name:"monogodb", 
        connector: "monogodb", 
        url: process.env.dbUrl || "mongodb://localhost:27017/nigeria_states_towns_lgas",
        database: "nigeria_states_towns_lgas", 
        user: "", 
        password: "",
    }, 
    host: "localhost", 
    type: "http://", 
    port: process.env.serverPort || '4000'
};


/***********************************
 ** Maintain server Configuration **
 **** according to env variable ****
 ***********************************/
if(process.env.NODE_ENV === "development"){
    serverConfig.mongodb.user = "";
    serverConfig.mongodb.password = "";
}else if( process.env.NODE_ENV === "production"){
    serverConfig.mongodb.url = process.env.dbUrl || "mongodb://127.0.0.1:27017/nigeria_states_towns_lgas";
    serverConfig.mongodb.database = "nigeria_states_towns_lgas";
    serverConfig.mongodb.user = "";
    serverConfig.mongodb.password = "";
    serverConfig.port = process.env.serverPort || "4001";
}
/** exporting server configuration */
module.exports = serverConfig;