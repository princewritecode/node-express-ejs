const http = require("http");
//http is node feature to access network features using c++
const server = http.createServer(doOnIncoming);
//now we access the internal feature of computer using node c++ to open socket and listen to http request
server.listen(80);
//listening on port 80 as we have thousands of port to listen to
/*
whenever request comes we need function to autorun as soon as request arrives let's understand how it works
*/
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
    console.log(incomingData);
    functionsToSetOutgoingData.end("Welcome to twitter");
};
//the above is working server which will show responce welcome to twitter