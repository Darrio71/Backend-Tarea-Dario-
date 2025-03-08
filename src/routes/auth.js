"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_ctrl_1 = require("../controllers/auth.ctrl");
const auth_dto_1 = require("../validations/dtos/auth.dto");
const validate_dto_1 = require("../middlewares/validate-dto");
const router = (0, express_1.Router)();
exports.router = router;
/**
 * http://localhost:3010/auth/login [POST]
 */
router.post("/login", (0, validate_dto_1.validateDto)(auth_dto_1.LoginDto), auth_ctrl_1.loginCtrl);
/**
 * http://localhost:3010/auth/refresh-token [POST]
 */
router.post("/refresh-token", (0, validate_dto_1.validateDto)(auth_dto_1.tokenDto), auth_ctrl_1.refreshTokenLimitCtrl);
