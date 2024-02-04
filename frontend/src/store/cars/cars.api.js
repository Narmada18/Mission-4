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
exports.deleteCarApi = exports.updateCarApi = exports.createCarApi = exports.getAllCarsApi = void 0;
const cars_action_1 = require("./cars.action");
const react_toastify_1 = require("react-toastify");
const getAllCarsApi = (queryString = "") => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    // start loading
    dispatch((0, cars_action_1.loadCars)());
    try {
        const token = localStorage.getItem("carToken");
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace?${queryString}`, {
            headers
        });
        const data = yield res.json();
        // if request success then store the data otherwise set error
        if (res.ok)
            dispatch((0, cars_action_1.successCars)(data.data));
        else
            dispatch((0, cars_action_1.errorCars)());
    }
    catch (error) {
        console.log("error:", error);
        react_toastify_1.toast.error(error.message);
        dispatch((0, cars_action_1.errorCars)());
    }
});
exports.getAllCarsApi = getAllCarsApi;
const createCarApi = (car) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (Object.keys(car).length === 0)
        return;
    // start loading
    dispatch((0, cars_action_1.loadCars)());
    try {
        const token = localStorage.getItem("carToken");
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace`, {
            method: "POST",
            body: JSON.stringify(car),
            headers
        });
        const data = yield res.json();
        // if request success then store the data otherwise set error
        if (res.ok) {
            dispatch((0, exports.getAllCarsApi)());
            react_toastify_1.toast.success(data.message);
        }
        else {
            dispatch((0, cars_action_1.errorCars)());
            react_toastify_1.toast.error(data.message);
        }
    }
    catch (error) {
        console.log('error:', error);
        react_toastify_1.toast.error(error.message);
        dispatch((0, cars_action_1.errorCars)());
    }
});
exports.createCarApi = createCarApi;
const updateCarApi = ({ carId, update }) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!carId || Object.keys(update).length === 0)
        return;
    console.log({ carId, update });
    // start loading
    dispatch((0, cars_action_1.loadCars)());
    try {
        const token = localStorage.getItem("carToken");
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace/${carId}`, {
            method: 'PATCH',
            body: JSON.stringify(update),
            headers
        });
        const data = yield res.json();
        // if request success then store the data otherwise set error
        if (res.ok) {
            dispatch((0, exports.getAllCarsApi)());
            react_toastify_1.toast.success(data.message);
        }
        else {
            dispatch((0, cars_action_1.errorCars)());
            react_toastify_1.toast.error(data.message);
        }
    }
    catch (error) {
        console.log('error:', error);
        react_toastify_1.toast.error(error.message);
        dispatch((0, cars_action_1.errorCars)());
    }
});
exports.updateCarApi = updateCarApi;
const deleteCarApi = (carId) => (dispatch) => __awaiter(void 0, void 0, void 0, function* () {
    if (!carId)
        return;
    // start loading
    dispatch((0, cars_action_1.loadCars)());
    try {
        const token = localStorage.getItem("carToken");
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token ? JSON.parse(token) : ""
        };
        const res = yield fetch(`${import.meta.env.VITE_APP_SERVER_URL}/marketplace/${carId}`, {
            method: 'DELETE',
            headers
        });
        const data = yield res.json();
        // if request success then store the data otherwise set error
        if (res.ok) {
            dispatch((0, exports.getAllCarsApi)());
            react_toastify_1.toast.success(data.message);
        }
        else {
            dispatch((0, cars_action_1.errorCars)());
            react_toastify_1.toast.error(data.message);
        }
    }
    catch (error) {
        console.log('error:', error);
        react_toastify_1.toast.error(error.message);
        dispatch((0, cars_action_1.errorCars)());
    }
});
exports.deleteCarApi = deleteCarApi;
