"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsReducer = void 0;
const cars_types_1 = require("./cars.types");
const initialState = {
    loading: false,
    error: false,
    data: [],
};
const carsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case cars_types_1.CARS_LOADING: {
            return Object.assign(Object.assign({}, state), { loading: true, error: false });
        }
        case cars_types_1.CARS_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: true });
        }
        case cars_types_1.CARS_SUCCESS: {
            return { data: payload, loading: false, error: false };
        }
        default:
            return state;
    }
};
exports.carsReducer = carsReducer;
