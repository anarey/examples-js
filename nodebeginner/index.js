var server = require("./server2");
var router = require("./router");

server.iniciar(router.route);
