"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authReducer = void 0;
const auth_types_1 = require("./auth.types");
const initialState = {
    loading: false,
    error: false,
    isAuth: false,
    user: {},
};
const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case auth_types_1.AUTH_LOADING: {
            return Object.assign(Object.assign({}, state), { loading: true, error: false });
        }
        case auth_types_1.AUTH_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: true });
        }
        case auth_types_1.AUTH_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: false, error: false });
        }
        case auth_types_1.AUTH_LOGIN_SUCCESS: {
            localStorage.setItem("carToken", JSON.stringify(payload.token));
            localStorage.setItem("username", JSON.stringify(payload.name));
            return { loading: false, error: false, isAuth: true, user: payload };
        }
        case auth_types_1.AUTH_LOGOUT: {
            localStorage.clear();
            return initialState;
        }
        default:
            return state;
    }
};
exports.authReducer = authReducer;
