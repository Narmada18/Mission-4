"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oemsReducer = void 0;
const oems_types_1 = require("./oems.types");
const initialState = {
    loading: false,
    error: false,
    data: []
};
const oemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case oems_types_1.OEMS_LOADING: {
            return Object.assign(Object.assign({}, state), { loading: true, error: false });
        }
        case oems_types_1.OEMS_ERROR: {
            return Object.assign(Object.assign({}, state), { loading: false, error: true });
        }
        case oems_types_1.OEMS_SUCCESS: {
            return Object.assign(Object.assign({}, state), { data: payload, loading: false, error: false });
        }
        default:
            return state;
    }
};
exports.oemsReducer = oemsReducer;
