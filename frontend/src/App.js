"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AllRoutes_1 = __importDefault(require("./routes/AllRoutes"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function App() {
    return (<div className="App">
        <react_toastify_1.ToastContainer />
        <AllRoutes_1.default />
    </div>);
}
exports.default = App;
