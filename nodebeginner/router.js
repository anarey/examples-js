function route(handle, pathname) {
  console.log("A punto de rutear una peticion para " + pathname);
  console.log("Es " + handle[pathname]);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log("No se encontro manipulador para " + pathname);
    return "404 No Encontrado";
  }
}

exports.route = route;
