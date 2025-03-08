"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserValidation = exports.getUserValidation = exports.updateUserValidation = exports.createUserValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUserValidation = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
});
exports.updateUserValidation = joi_1.default.object({
    id: joi_1.default.number().required(),
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string(),
});
exports.getUserValidation = joi_1.default.object({
    id: joi_1.default.number().required()
});
exports.deleteUserValidation = joi_1.default.object({
    id: joi_1.default.number().required()
});
