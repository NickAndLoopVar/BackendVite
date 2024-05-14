const express = require("express");
const conectarBD = require("../config/db");
const cors = require("cors");

//Configuracion express y puerto
const app = express();
const port = process.env.PORT || 5000;
conectarBD();
app.use(cors());
app.use(express.json());

//Enlazamos la coneccion de la base de datos

//Aqui van las rutas de los modulos
app.use("/api/clientes", require("../routes/RoutesCliente"));
app.use("/api/proyectos", require("../routes/RoutesProyecto"));

//Se configura
app.listen(port, () =>
  console.log(
    "Nuestro servidor se encuentra conectado http://localhost:5000",
    port
  )
);

//Se prueba esta ruta en el navegador
app.get("/", (req, res) => {
  res.send("Bienvenido nuestro servidor esta configurado");
});
