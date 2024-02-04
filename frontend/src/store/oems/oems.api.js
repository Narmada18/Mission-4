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
exports.getAllOemsApi = void 0;
const oems_action_1 = require("./oems.action");
const react_toastify_1 = require("react-toastify");
const getAllOemsApi = (queryString = "") => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    dispatch((0, oems_action_1.loadOems)());
    try {
        const token = localStorage.getItem("carToken");
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const serverUrl = "http://example.com"; // Replace with the actual server URL
        const res = yield fetch(`${serverUrl}/oemspec?${queryString}`, { headers });
        const data = yield res.json();
        if (res.ok) {
            dispatch((0, oems_action_1.successOems)(data.data));
        }
        else {
            dispatch((0, oems_action_1.errorOems)());
        }
    }
    catch (error) {
        console.log('error:', error);
        react_toastify_1.toast.error(error.message);
        dispatch((0, oems_action_1.errorOems)());
    }
});
exports.getAllOemsApi = getAllOemsApi;
