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
exports.loginUser = exports.refreshTokenLimit = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const bcrypt_handle_1 = require("../utils/bcrypt.handle");
const jwt_handle_1 = require("../utils/jwt.handle");
const usuario_srv_1 = require("./usuario.srv");
const refreshTokenLimit = (token) => __awaiter(void 0, void 0, void 0, function* () {
    let isValidToken = yield (0, jwt_handle_1.verifyToken)(token);
    if (!isValidToken)
        return "TOKEN_NO_VALID";
    let { id } = yield (0, jwt_handle_1.getUserToken)(token);
    const { nombres, email } = yield (0, usuario_srv_1.getUser)(id);
    if (!email)
        return "NOT_FOUND_USER";
    const newToken = yield (0, jwt_handle_1.generateTokenLimitTime)(email, nombres, id);
    return { nombres, email, token: newToken };
});
exports.refreshTokenLimit = refreshTokenLimit;
const loginUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ email, password }) {
    const user = yield prisma.usuario.findFirst({ where: { email } });
    if (!(user === null || user === void 0 ? void 0 : user.id))
        return;
    const passwordHash = user.password;
    const isCorrect = yield (0, bcrypt_handle_1.verified)(password, passwordHash);
    if (!isCorrect)
        return;
    const token = yield (0, jwt_handle_1.generateTokenLimitTime)(user.email, user.nombres, user.id);
    return { nombres: user.nombres, email: user.email, token };
});
exports.loginUser = loginUser;
