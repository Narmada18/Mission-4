"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../assets/scss/auth.scss");
const LoginForm_1 = __importDefault(require("../components/LoginForm"));
const Login = () => {
    return (<div className="login">    
      <LoginForm_1.default />
    </div>);
};
exports.default = Login;
