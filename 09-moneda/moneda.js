const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function lanzarMoneda() {
  var random = Math.random();
  if (random < 0.5) {
    return "cara";
  } else {
    return "cruz";
  }
}

let opcion = "lanzar";
while (opcion === "lanzar") {
  console.log(lanzarMoneda());
  opcion = readline.question(
    "¿Quieres lanzar la moneda de nuevo? (lanzar/salir)",
    (respuesta) => {
      if (respuesta === "salir") {
        console.log("Hasta luego");
      }
    }
  );
}
