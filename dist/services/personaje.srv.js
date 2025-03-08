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
exports.updatePersonajeSrv = exports.deletePersonajeSrv = exports.getPersonajeSrv = exports.getListaPersonajeSrv = exports.createPersonajeSrv = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPersonajeSrv = (_a) => __awaiter(void 0, [_a], void 0, function* ({ foto, nombre, idUsuario }) {
    if (!nombre) {
        return { error: "Es requerido" };
    }
    const response = yield prisma.personaje.create({
        data: {
            nombre,
            foto,
            idUsuario
        }
    });
    return response;
});
exports.createPersonajeSrv = createPersonajeSrv;
const getListaPersonajeSrv = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.personaje.findMany({ where: { flag: true } });
    return response;
});
exports.getListaPersonajeSrv = getListaPersonajeSrv;
const getPersonajeSrv = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.personaje.findFirst({
        where: {
            id,
            flag: true
        }
    });
    if (!response) {
        return 405;
    }
    return response;
});
exports.getPersonajeSrv = getPersonajeSrv;
const deletePersonajeSrv = (id) => __awaiter(void 0, void 0, void 0, function* () {
    //Hard delete
    // const response = await prisma.personaje.delete({
    //   where: {
    //     id
    //   }
    // });
    //soft delete
    const response = yield prisma.personaje.update({
        where: {
            id
        },
        data: {
            flag: false
        }
    });
    return response;
});
exports.deletePersonajeSrv = deletePersonajeSrv;
const updatePersonajeSrv = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, nombre, foto }) {
    if (!nombre) {
        return { error: "Es requerido" };
    }
    const response = yield prisma.personaje.update({
        where: {
            id
        },
        data: {
            nombre, foto
        }
    });
    return response;
});
exports.updatePersonajeSrv = updatePersonajeSrv;
