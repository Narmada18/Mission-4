"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCar = exports.updateCarDetails = exports.postCar = exports.getAllCars = void 0;
const Marketplace_inventory_model_js_1 = require("../models/Marketplace_inventory.model.js");
/**
 * Get all cars from Database
 */
const getAllCars = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { q, color, minprice = 0, maxprice = Infinity, minmileage = 0, maxmileage = Infinity } = req.query;
    try {
        // get cars data with OEM details and dealer's username
        const car_data = yield Marketplace_inventory_model_js_1.marketplace_inventoryModel.find()
            .populate('oemSpec')
            .populate('dealer', 'username')
            .exec();
        let filteredCar_data = car_data;
        if (q && typeof q === 'string') // Check if q is a string
            filteredCar_data = car_data.filter((el) => el.oemSpec.model.match(new RegExp(q, 'i'))); // searching by model name
        if (color && typeof color === 'string') // Check if color is a string
            filteredCar_data = filteredCar_data.filter((el) => { var _a; return (_a = el.oemSpec.colors) === null || _a === void 0 ? void 0 : _a.includes(color); }); // filter by color
        if (minprice || maxprice)
            filteredCar_data = filteredCar_data.filter((el) => el.oemSpec.listPrice >= Number(minprice) && el.oemSpec.listPrice <= Number(maxprice)); // filter on price
        if (minmileage || maxmileage)
            filteredCar_data = filteredCar_data.filter((el) => el.oemSpec.mileage >= Number(minmileage) && el.oemSpec.mileage <= Number(maxmileage)); // filter on mileage
        res.status(200).send({ message: 'success', data: filteredCar_data });
    }
    catch (error) {
        console.log('error:', error);
        res.status(500).send({
            message: error.message,
            error,
        });
    }
});
exports.getAllCars = getAllCars;
/**
 * Post car in Database
 */
const postCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.headers.userId;
    try {
        // post car data in database
        const newCarData = new Marketplace_inventory_model_js_1.marketplace_inventoryModel(Object.assign({ dealer: userId }, req.body));
        yield newCarData.save();
        res.status(201).send({ message: 'New car posted' });
    }
    catch (error) { // Explicitly type 'error' as 'any'
        console.log('error:', error);
        res.status(500).send({
            message: error.message,
            error,
        });
    }
});
exports.postCar = postCar;
/**
 * Update the car if you're the dealer
 */
const updateCarDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = req.params.id;
    const userId = req.headers.userId;
    const update = req.body;
    try {
        // finding cars created by the loggedin user
        const matchedCars = yield Marketplace_inventory_model_js_1.marketplace_inventoryModel.find({ dealer: userId, _id: carId });
        if (matchedCars.length) {
            // find the car by its id and update the data if you are the dealer
            yield Marketplace_inventory_model_js_1.marketplace_inventoryModel.findByIdAndUpdate(carId, update);
            res.status(202).send({ message: 'car data updated successfully.' });
        }
        else {
            res.status(404).send({ message: "you're not authorized to edit the info of this car!" });
        }
    }
    catch (error) {
        console.log('error:', error);
        res.status(500).send({
            message: error.message,
            error,
        });
    }
});
exports.updateCarDetails = updateCarDetails;
/**
 * Delete the car if you're the dealer
 */
const deleteCar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const carId = req.params.id;
    const userId = req.headers.userId;
    try {
        // finding cars created by the loggedin user
        const matchedCars = yield Marketplace_inventory_model_js_1.marketplace_inventoryModel.find({ dealer: userId, _id: carId });
        if (matchedCars.length) {
            // find the car by its id and delete if you are the dealer
            yield Marketplace_inventory_model_js_1.marketplace_inventoryModel.findByIdAndDelete(carId);
            res.status(202).send({ message: 'car deleted successfully.' });
        }
        else {
            res.status(404).send({ message: "you're not authorized to delete this car!" });
        }
    }
    catch (error) {
        console.log('error:', error);
        res.status(500).send({
            message: error.message,
            error,
        });
    }
});
exports.deleteCar = deleteCar;
