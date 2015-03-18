var exec = require("child_process").exec;

function iniciarls(response) {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");

  exec("ls -lah",
     { timeout: 10000, maxBuffer: 20000*1024 },
     function(error, stdout, sterr) {
       response.writeHead(200, {"Content-Type": "text/html"});
       response.write(stdout);
       response.end();
  });
}

function iniciar(response) {
  console.log("Manipulador de peticiones 'iniciar' fue llamado.");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/subir" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Enviar texto" />' +
    '</form>' +
    '</body>' +
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function subir(response) {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("Hola Subir");
  response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;
