"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const react_1 = require("react");
const react_router_dom_2 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const auth_api_1 = require("../store/auth/auth.api");
const LoginForm = () => {
    const [email, setEmail] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    const navigate = (0, react_router_dom_2.useNavigate)();
    const { loading } = (0, react_redux_1.useSelector)((store) => store.authManager);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleLogin = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password
        };
        dispatch((0, auth_api_1.signinApi)(userData, navigate));
    };
    console.log(loading);
    return (<form>
        <h1>Login</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" value={email} placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>New User? <react_router_dom_1.Link to={'/signup'}>Sign Up</react_router_dom_1.Link></div>
        <button disabled={loading} type="button" onClick={handleLogin} className={loading ? "loading" : ""}>
          {loading ? "Loading.." : "Login"}
        </button>
      </form>);
};
exports.default = LoginForm;
