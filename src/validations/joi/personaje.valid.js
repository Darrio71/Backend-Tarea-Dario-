"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonajeValidation = exports.getPersonajeValidation = exports.updatePersonajeValidation = exports.createPersonajeValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createPersonajeValidation = (req, res, next) => {
    try {
        const schema = joi_1.default.object({
            nombre: joi_1.default.string().required(),
            foto: joi_1.default.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return; // End the request here, no need to call next()
        }
        next(); // Proceed to the next middleware/controller
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createPersonajeValidation = createPersonajeValidation;
const updatePersonajeValidation = (req, res, next) => {
    try {
        const schema = joi_1.default.object({
            id: joi_1.default.number().required(),
            nombre: joi_1.default.string(),
            foto: joi_1.default.string(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.updatePersonajeValidation = updatePersonajeValidation;
const getPersonajeValidation = (req, res, next) => {
    try {
        const schema = joi_1.default.object({
            id: joi_1.default.number().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getPersonajeValidation = getPersonajeValidation;
const deletePersonajeValidation = (req, res, next) => {
    try {
        const schema = joi_1.default.object({
            id: joi_1.default.number().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.deletePersonajeValidation = deletePersonajeValidation;
