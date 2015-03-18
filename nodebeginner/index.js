var server = require("./server2");
var router = require("./router");
var requestHandlers = require("./requestsHandlers");

var handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);
