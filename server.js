//Lets require/import the HTTP module
var http = require('http');
var MongoClient = require('mongodb').MongoClient



// Connection URL
var url = 'mongodb://mongo_instance.mongo-docker.dev.docker:27017/test';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {

    console.log("Connected correctly to server");

    //Lets define a port we want to listen to
    const PORT=9100;

    //We need a function which handles requests and send response
    function handleRequest(request, response){
      response.end('It Works!! ' + "Mongo Connected Url " + url  );
    }

    //Create a server
    var server = http.createServer(handleRequest);

    //Lets start our server
    server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
    });
});
