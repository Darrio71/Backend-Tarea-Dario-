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
exports.deleteUser = exports.getSearchUsuario = exports.getUser = exports.getListUsuario = exports.updateUser = exports.registerUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const prisma = new client_1.PrismaClient();
const registerUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password, nombres }) {
    const checkIs = yield prisma.usuario.findFirst({
        where: { email },
    });
    if (checkIs === null || checkIs === void 0 ? void 0 : checkIs.email)
        return "ALREADY_USER";
    const passHash = yield (0, bcrypt_handle_1.encrypt)(password);
    const response = yield prisma.usuario.create({
        data: {
            email,
            nombres,
            password: passHash,
        }
    });
    return response;
});
exports.registerUser = registerUser;
const updateUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, nombres, email, password, }) {
    const checkIs = yield prisma.usuario.findFirst({
        where: { email },
    });
    if ((checkIs === null || checkIs === void 0 ? void 0 : checkIs.email) && id === 0)
        return "ALREADY_USER";
    const response = yield prisma.usuario.update({
        where: {
            id
        },
        data: {
            nombres,
            email,
            password: yield (0, bcrypt_handle_1.encrypt)(password),
        }
    });
    return response;
});
exports.updateUser = updateUser;
const getListUsuario = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.usuario.findMany();
    return response;
});
exports.getListUsuario = getListUsuario;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield prisma.usuario.findFirst({
        where: {
            id
        },
    });
    if (!user)
        return;
    return user;
});
exports.getUser = getUser;
const getSearchUsuario = (nombres) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.usuario.findMany({
        where: {
            nombres
        }
    });
    return response;
});
exports.getSearchUsuario = getSearchUsuario;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield prisma.usuario.delete({
        where: {
            id
        }
    });
    return response;
});
exports.deleteUser = deleteUser;
