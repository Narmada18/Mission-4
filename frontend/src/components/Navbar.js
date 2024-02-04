"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fi_1 = require("react-icons/fi");
const ai_1 = require("react-icons/ai");
require("../assets/scss/Navbar.scss");
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const auth_api_1 = require("../store/auth/auth.api");
const carlogo_png_1 = __importDefault(require("../assets/images/carlogo.png"));
const Navbar = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleLogout = () => {
        dispatch((0, auth_api_1.logoutApi)());
    };
    return (<nav className="navbar">
      <div className="left">
        <img src={carlogo_png_1.default} alt="Logo"/>
      </div>
      <div className="right">
        <ul className="nav-list">
          <li className="nav-item">
            <react_router_dom_1.Link to={"/"} className="nav-link">
              <fi_1.FiHome />
              <span>Home</span>
            </react_router_dom_1.Link>
          </li>
          <li className="nav-item">
            <react_router_dom_1.Link to={"/sell-car"} className="nav-link">
              <ai_1.AiFillCar />
              <span>Sell Car</span>
            </react_router_dom_1.Link>
          </li>
          <li className="nav-item">
            <div onClick={handleLogout} className="nav-link">
              <fi_1.FiLogOut />
              <span>Logout</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>);
};
exports.default = Navbar;
