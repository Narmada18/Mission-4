"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const oems_reducer_1 = require("./oems/oems.reducer");
const auth_reducer_1 = require("./auth/auth.reducer");
const cars_reducer_1 = require("./cars/cars.reducer");
const rootReducer = (0, redux_1.combineReducers)({
    authManager: auth_reducer_1.authReducer,
    carsManager: cars_reducer_1.carsReducer,
    oemsManager: oems_reducer_1.oemsReducer
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_1.compose;
exports.store = (0, redux_1.legacy_createStore)(rootReducer, composeEnhancer((0, redux_1.applyMiddleware)(redux_thunk_1.thunk)));
