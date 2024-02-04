"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutAuth = exports.successLoginAuth = exports.successAuth = exports.errorAuth = exports.loadAuth = void 0;
const auth_types_1 = require("./auth.types");
const loadAuth = () => ({ type: auth_types_1.AUTH_LOADING });
exports.loadAuth = loadAuth;
const errorAuth = () => ({ type: auth_types_1.AUTH_ERROR });
exports.errorAuth = errorAuth;
const successAuth = () => ({ type: auth_types_1.AUTH_SUCCESS });
exports.successAuth = successAuth;
const successLoginAuth = (payload) => ({ type: auth_types_1.AUTH_LOGIN_SUCCESS, payload });
exports.successLoginAuth = successLoginAuth;
const logoutAuth = () => ({ type: auth_types_1.AUTH_LOGOUT });
exports.logoutAuth = logoutAuth;
