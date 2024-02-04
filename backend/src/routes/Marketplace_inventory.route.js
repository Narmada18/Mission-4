"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Marketplace_inventory_controller_js_1 = require("../controllers/Marketplace_inventory.controller.js");
const marketplace_inventoryRouter = express_1.default.Router();
// Route for getting all cars from the marketplace
marketplace_inventoryRouter.route("/")
    .get(Marketplace_inventory_controller_js_1.getAllCars) // Retrieve all cars from the marketplace
    .post(Marketplace_inventory_controller_js_1.postCar); // Create a new car listing in the marketplace
// Route for updating and deleting a specific car by its ID
marketplace_inventoryRouter.route("/:id")
    .patch(Marketplace_inventory_controller_js_1.updateCarDetails) // Update details of a specific car
    .delete(Marketplace_inventory_controller_js_1.deleteCar); // Delete a specific car
exports.default = marketplace_inventoryRouter;
