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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_model_js_1 = require("../models/User.model.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const authCheck = (req, res, next) => {
    const token = req.headers.authorization;
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, function (err, decoded) {
        return __awaiter(this, void 0, void 0, function* () {
            if (err) {
                res.status(401).send({ message: "JWT verification error", error: err });
            }
            else {
                try {
                    const matchedUser = yield User_model_js_1.UserModel.findById(decoded.userId);
                    if (matchedUser) {
                        req.headers.userId = decoded.userId;
                        next();
                    }
                    else {
                        res.status(401).send({ message: "User doesn't exist!" });
                    }
                }
                catch (error) {
                    console.log('Error:', error);
                    res.status(500).send({ message: error.message, error });
                }
            }
        });
    });
};
exports.default = authCheck;
