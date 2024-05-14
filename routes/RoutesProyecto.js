const express = require("express");
const router = express.Router();
const ProyectoController = require("../controllers/ProyectoController");

router.post("/", ProyectoController.agregarProyecto);
router.get("/", ProyectoController.mostrarProyectos);
router.get("/:id", ProyectoController.mostrarUnProyecto);
router.delete("/:id", ProyectoController.eliminarProyectos);
router.patch("/:id", ProyectoController.modificarProyecto);

module.exports = router;
