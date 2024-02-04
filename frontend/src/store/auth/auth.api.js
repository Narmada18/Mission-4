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
exports.logoutApi = exports.signupApi = exports.signinApi = void 0;
const auth_action_1 = require("./auth.action");
const react_toastify_1 = require("react-toastify");
const signinApi = (userData, navigate) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData.email || !userData.password) {
        react_toastify_1.toast.error("Fill the Details");
        return;
    }
    // start loading
    dispatch((0, auth_action_1.loadAuth)());
    try {
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/signin`, {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = yield res.json();
        if (res.ok) {
            dispatch((0, auth_action_1.successLoginAuth)(data.user));
            navigate('/');
            react_toastify_1.toast.success(data.message);
        }
        else {
            dispatch((0, auth_action_1.errorAuth)());
            react_toastify_1.toast.error(data.message);
        }
    }
    catch (error) {
        console.log('error:', error);
        dispatch((0, auth_action_1.errorAuth)());
        react_toastify_1.toast.error(error.message);
    }
});
exports.signinApi = signinApi;
const signupApi = (userData, navigate) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!userData.username || !userData.email || !userData.password)
        return;
    // ? PASSWORD VERIFIER
    if (userData.password.length <= 5) {
        alert('Password must contain more than 5 char!');
        return;
    }
    // start loading
    dispatch((0, auth_action_1.loadAuth)());
    try {
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/signup`, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = yield res.json();
        dispatch(res.ok ? (0, auth_action_1.successAuth)() : (0, auth_action_1.errorAuth)());
        if (res.ok) {
            navigate('/login');
            react_toastify_1.toast.success(data.message);
        }
        else
            react_toastify_1.toast.error(data.message);
    }
    catch (error) {
        console.log('error:', error);
        dispatch((0, auth_action_1.errorAuth)());
        react_toastify_1.toast.error(error.message);
    }
});
exports.signupApi = signupApi;
/**
 * for log-out only
 */
const logoutApi = () => (dispatch) => {
    dispatch((0, auth_action_1.logoutAuth)());
    window.location.replace('/');
};
exports.logoutApi = logoutApi;
