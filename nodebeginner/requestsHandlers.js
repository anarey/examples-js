var exec = require("child_process").exec;

function iniciar() {
  console.log("Manipulador de petición 'iniciar' ha sido llamado.");
  var content = "empty";
  exec("ls -lah", function(error, stdout, sterr) {
     content = stdout;
  });
  return content;
}

function subir() {
  console.log("Manipulador de petición 'subir' ha sido llamado.");
  return "Hola subir";
}

exports.iniciar = iniciar;
exports.subir = subir;
