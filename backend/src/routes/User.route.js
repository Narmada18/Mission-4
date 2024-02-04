"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_js_1 = require("../controllers/user.controller.js");
const userRouter = express_1.default.Router();
userRouter.post("/signin", user_controller_js_1.userSignin);
userRouter.post("/signup", user_controller_js_1.userSignUp);
exports.default = userRouter;
