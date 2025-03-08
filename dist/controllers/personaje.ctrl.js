"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePersonajeCtrl = exports.deletePersonajeCtrl = exports.getPersonajeCtrl = exports.getListaPersonajeCtrl = exports.createPersonajeCtrl = void 0;
const personaje_srv_1 = require("../services/personaje.srv");
const createPersonajeCtrl = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const response = yield (0, personaje_srv_1.createPersonajeSrv)(body);
        // res.status(200).json({ msg: "200", data: response, success: true });
        res.status(200).json({ statusCode: 200, message: "Se ejecuto correctamente tu solicitud", data: response, success: true });
    }
    catch (error) {
        res.status(500).json({ error, success: false });
    }
});
exports.createPersonajeCtrl = createPersonajeCtrl;
const getListaPersonajeCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, personaje_srv_1.getListaPersonajeSrv)();
        res.status(200).json({ msg: "Ejecución correcta", data: response, success: true });
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getListaPersonajeCtrl = getListaPersonajeCtrl;
const getPersonajeCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, personaje_srv_1.getPersonajeSrv)(Number(id));
        res.status(200).json({ msg: 200, data: response, success: true });
    }
    catch (error) {
        res.status(500).json({ error, success: false });
    }
});
exports.getPersonajeCtrl = getPersonajeCtrl;
const deletePersonajeCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, personaje_srv_1.deletePersonajeSrv)(parseInt(id));
        res.status(200).json({ msg: 200, data: response, success: true });
    }
    catch (error) {
        res.status(500).json({ error, success: false });
    }
});
exports.deletePersonajeCtrl = deletePersonajeCtrl;
const updatePersonajeCtrl = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const response = yield (0, personaje_srv_1.createPersonajeSrv)(body);
        res.status(200).json({ msg: 200, data: response, success: true });
    }
    catch (error) {
        res.status(500).json({ error, success: false });
    }
});
exports.updatePersonajeCtrl = updatePersonajeCtrl;
