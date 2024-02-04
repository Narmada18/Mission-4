"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
function PrivateRoute({ children }) {
    // get the token from the local storage, if it's available then allow 
    // the user to go to the desired page; otherwise, redirect them to the login page
    const token = localStorage.getItem('carToken');
    const parsedToken = token ? JSON.parse(token) : "";
    if (parsedToken) {
        return <>{children}</>;
    }
    else {
        return <react_router_dom_1.Navigate to="/login"/>;
    }
}
exports.default = PrivateRoute;
