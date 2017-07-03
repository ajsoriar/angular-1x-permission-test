/*

 To start this server:

 1) Instal npm packages: "$ sudo npm install"
 2) Execute in the cmd line: "node server.js"

*/

var express = require("express");

var app = express();

// SERVER CONFIGURATION
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
};

app.use(allowCrossDomain);

var pathString = "/ajsoriar-demo_api/v1";

app.get(pathString + "/tasks", function(req, res) {
    console.log("Sending tasks");
    res.sendFile( __dirname + '/services/tasks/tasks.json'); // Here we should get data from DB
});

app.get(pathString + "/data", function(req, res) {
    console.log("Sending data");
    res.sendFile( __dirname + '/services/stuff/data.json'); // Here we should get data from DB
});

app.get(pathString + "/userData", function(req, res) {
    console.log("Sending user data");
    res.sendFile( __dirname + '/services/users/user-info.json'); // Here we should get data from DB
});

app.post(pathString + "/userData", function(req, res) {
    console.log("the server receives: \n", req);
    var response = '{"post_result":"All was right!!!!"}' // This is an example for demp purposes

    setTimeout(function(){ // Lets simulate a delay on the response.
        res.send(response); // This is the end!
    }, 2000);  
    
});

// Start server
app.listen(9003, function() {
    console.log("Listening on 9003");
});