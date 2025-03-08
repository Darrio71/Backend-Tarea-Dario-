"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const personaje_ctrl_1 = require("../controllers/personaje.ctrl");
const personaje_valid_1 = require("../validations/joi/personaje.valid");
const personaje_dto_1 = require("../validations/dtos/personaje.dto");
const validate_dto_1 = require("../middlewares/validate-dto");
const client_1 = require("@prisma/client");
const rol_md_1 = require("../middlewares/rol.md");
const router = (0, express_1.Router)();
exports.router = router;
//podemos usar DTO's o Joi para validar los datos enviados [Ejemplo]
router.post("/", (0, validate_dto_1.validateDto)(personaje_dto_1.CreatePersonajeDto), personaje_valid_1.createPersonajeValidation, personaje_ctrl_1.createPersonajeCtrl);
router.get("/list", (0, rol_md_1.rolRequired)(client_1.RolUsuario.ADMIN), personaje_ctrl_1.getListaPersonajeCtrl);
router.get("/only/:id", personaje_ctrl_1.getPersonajeCtrl);
router.delete("/:id", personaje_ctrl_1.deletePersonajeCtrl);
router.put("/", personaje_ctrl_1.updatePersonajeCtrl);
