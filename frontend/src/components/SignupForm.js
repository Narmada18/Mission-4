"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const auth_api_1 = require("../store/auth/auth.api");
const SignupForm = () => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const { loading } = (0, react_redux_1.useSelector)((store) => store.authManager);
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_2.useNavigate)();
    const handleSignUp = (e) => {
        e.preventDefault();
        const userData = {
            username,
            email,
            password
        };
        dispatch((0, auth_api_1.signupApi)(userData, navigate));
    };
    console.log(loading);
    return (<form>
         <h1>Sign Up</h1>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} placeholder="Enter your Username" onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>Existing User? <react_router_dom_1.Link to={'/login'}>Login</react_router_dom_1.Link></div>
        <button disabled={loading} type="button" onClick={handleSignUp} className={loading ? "loading" : ""}>
          {loading ? "Loading.." : "Sign Up"}
        </button>
      </form>);
};
exports.default = SignupForm;
