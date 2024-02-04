"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_dom_1 = require("react-dom");
const App_tsx_1 = __importDefault(require("./App.tsx"));
const react_redux_1 = require("react-redux");
const store_ts_1 = require("./store/store.ts");
const react_router_dom_1 = require("react-router-dom");
require("./assets/scss/main.scss");
(0, react_dom_1.render)(<react_router_dom_1.BrowserRouter>
 <react_redux_1.Provider store={store_ts_1.store}>
    <App_tsx_1.default />
  </react_redux_1.Provider>
  </react_router_dom_1.BrowserRouter>, document.getElementById('root'));
