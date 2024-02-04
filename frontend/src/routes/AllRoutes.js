"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const Home_1 = __importDefault(require("../pages/Home"));
const PrivateRoute_1 = __importDefault(require("./PrivateRoute"));
const SellCar_1 = __importDefault(require("../pages/SellCar"));
const Login_1 = __importDefault(require("../pages/Login"));
const Signup_1 = __importDefault(require("../pages/Signup"));
function AllRoutes() {
    return (<react_router_dom_1.Routes>
      <react_router_dom_1.Route path="/" element={<PrivateRoute_1.default><Home_1.default /></PrivateRoute_1.default>}/>
      <react_router_dom_1.Route path="/sell-car" element={<PrivateRoute_1.default><SellCar_1.default /></PrivateRoute_1.default>}/>
      <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
      <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
    </react_router_dom_1.Routes>);
}
exports.default = AllRoutes;
