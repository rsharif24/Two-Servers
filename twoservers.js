var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function good(request, response) {

  response.end("You look great today!");
};

function bad(request, response) {

  response.end("You look a lil nasty today");
};

var server1 = http.createServer(good);
var server2 = http.createServer(bad);

server1.listen(PORT1, function() {

  console.log("Server listening on: http://localhost:%s", PORT1);

});

server2.listen(PORT2, function() {

  console.log("Server listening on: http://localhost:%s", PORT2);

});