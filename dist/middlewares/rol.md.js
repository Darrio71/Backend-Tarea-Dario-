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
exports.rolRequired = void 0;
const usuario_srv_1 = require("../services/usuario.srv");
const rolRequired = (role) => {
    return (_a, res_1, next_1) => __awaiter(void 0, [_a, res_1, next_1], void 0, function* ({ body }, res, next) {
        try {
            const { user } = body;
            const { rol } = yield (0, usuario_srv_1.getUser)(user.id);
            if (rol === role) {
                next();
            }
            else {
                res.status(401).send("ROL_INVALID");
            }
        }
        catch (error) {
            res.status(401).send("SESSION_NO_VALID");
        }
    });
};
exports.rolRequired = rolRequired;
