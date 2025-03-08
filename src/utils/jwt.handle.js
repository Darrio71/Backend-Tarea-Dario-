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
exports.getUserToken = exports.verifyToken = exports.generateTokenUnlimitTime = exports.generateTokenLimitTime = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "Tokenprueba";
var JWT_TIME;
(function (JWT_TIME) {
    JWT_TIME[JWT_TIME["LIMIT"] = 0] = "LIMIT";
    JWT_TIME[JWT_TIME["UNLIMIT"] = 1] = "UNLIMIT";
})(JWT_TIME || (JWT_TIME = {}));
const generateTokenLimitTime = (email, name, id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = yield (0, jsonwebtoken_1.sign)({ id, email, name, limit: JWT_TIME.LIMIT }, JWT_SECRET, { expiresIn: "2h" });
    return jwt;
});
exports.generateTokenLimitTime = generateTokenLimitTime;
const generateTokenUnlimitTime = (email, name, id) => __awaiter(void 0, void 0, void 0, function* () {
    const jwt = yield (0, jsonwebtoken_1.sign)({ id, email, name, limit: JWT_TIME.UNLIMIT }, JWT_SECRET);
    return jwt;
});
exports.generateTokenUnlimitTime = generateTokenUnlimitTime;
const verifyToken = (jwt) => {
    const isCorrect = (0, jsonwebtoken_1.verify)(jwt, JWT_SECRET);
    return isCorrect;
};
exports.verifyToken = verifyToken;
const getUserToken = (jwt) => {
    let getUser = (0, jsonwebtoken_1.decode)(jwt);
    return getUser;
};
exports.getUserToken = getUserToken;
