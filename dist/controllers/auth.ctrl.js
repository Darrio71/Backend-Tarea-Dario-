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
exports.loginCtrl = exports.refreshTokenLimitCtrl = void 0;
const auth_srv_1 = require("../services/auth.srv");
const refreshTokenLimitCtrl = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        let { token } = yield body;
        const response = yield (0, auth_srv_1.refreshTokenLimit)(token);
        if (response === "TOKEN_NO_VALID" || response === "NOT_FOUND_USER") {
            res.status(403).send({ status: false, msg: response });
            return;
        }
        res.status(200).send(Object.assign({ status: true }, response));
    }
    catch (error) {
        res.status(500).send({ status: false, msg: "ERROR_REFRESH_TOKEN " + error });
    }
});
exports.refreshTokenLimitCtrl = refreshTokenLimitCtrl;
const loginCtrl = (_a, res_1) => __awaiter(void 0, [_a, res_1], void 0, function* ({ body }, res) {
    try {
        const response = yield (0, auth_srv_1.loginUser)(body);
        if (!response) {
            res.status(403).send({ status: false, msg: "ERROR_CREDENTIALS" });
            return;
        }
        res.status(200).send(Object.assign({ status: true }, response));
    }
    catch (error) {
        res.status(500).send({ status: false, msg: "ERROR_LOGIN_AUTH " + error });
    }
});
exports.loginCtrl = loginCtrl;
