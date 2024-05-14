const mongoose = require("mongoose");
require("dotenv").config();

//Funcion para hacer la conexion

const conectarBD = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con mongoDB"))
    .catch((err) => console.log(err));
};

module.exports = conectarBD;
