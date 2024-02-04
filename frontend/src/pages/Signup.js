"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SignupForm_1 = __importDefault(require("../components/SignupForm"));
const Signup = () => {
    return (<div className="signUp">
        <SignupForm_1.default />
    </div>);
};
exports.default = Signup;
