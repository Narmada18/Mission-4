"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OEMSpec_controller_js_1 = require("../controllers/OEMSpec.controller.js");
const oemSpecRouter = express_1.default.Router();
oemSpecRouter.route("/")
    .get(OEMSpec_controller_js_1.getAllOems) // Retrieve all OEM-specs data
    .post(OEMSpec_controller_js_1.postOEMs); // Create a new OEM-spec data
exports.default = oemSpecRouter;
