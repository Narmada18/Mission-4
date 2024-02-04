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
exports.userSignUp = exports.userSignin = void 0;
const User_model_js_1 = require("../models/User.model.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Sign-in for users
const userSignin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(403).send({ message: 'Provide proper data for signin' });
        return;
    }
    try {
        const matchedUser = yield User_model_js_1.UserModel.findOne({ email });
        if (matchedUser) {
            bcrypt_1.default.compare(password, matchedUser.password, function (err, result) {
                var _a;
                if (result) {
                    const token = jsonwebtoken_1.default.sign({
                        userId: matchedUser._id,
                    }, (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : '');
                    res.status(200).send({
                        message: 'Login successful',
                        user: {
                            id: matchedUser._id,
                            name: matchedUser.username,
                            token,
                        },
                    });
                }
                else {
                    res.status(400).send({ message: 'Wrong Password!', error: err });
                }
            });
        }
        else {
            res.status(404).send({ message: 'User not found!' });
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Internal server error!',
            error: error.message,
        });
    }
});
exports.userSignin = userSignin;
// Sign-up for users
const userSignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    // if username, email or password, any thing missing then reject the request
    if (!username || !email || !password) {
        res.status(403).send({ message: 'Provide proper data for signup' });
        return;
    }
    try {
        const matchedUsers = yield User_model_js_1.UserModel.find({ email });
        if (matchedUsers.length) {
            res.status(200).send({
                message: 'User already exists!',
            });
        }
        else {
            bcrypt_1.default.hash(password, Number(process.env.SALT_ROUND), function (err, hash) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (err) {
                        res.status(500).send({
                            message: 'error in bcrypt',
                            error: err
                        });
                    }
                    else {
                        try {
                            const user = new User_model_js_1.UserModel({ username, email, password: hash });
                            yield user.save();
                            res.status(201).send({
                                message: 'Signup Successful',
                            });
                        }
                        catch (error) {
                            console.log('error:', error);
                            res.status(400).send({
                                message: error.message,
                                error: error,
                            });
                        }
                    }
                });
            });
        }
    }
    catch (error) {
        res.status(500).send({
            message: 'Internal server error!',
            error: error,
        });
    }
});
exports.userSignUp = userSignUp;
