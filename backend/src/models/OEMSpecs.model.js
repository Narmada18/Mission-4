"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OEMSpecModel = void 0;
const mongoose_1 = require("mongoose");
const oemSpecSchema = new mongoose_1.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    listPrice: {
        type: Number,
        required: true,
    },
    colors: [String],
    mileage: {
        type: Number,
        required: true,
    },
    power: {
        type: Number,
        required: true,
    },
    maxSpeed: {
        type: Number,
        required: true,
    },
}, { versionKey: false, timestamps: true });
const OEMSpecModel = (0, mongoose_1.model)('oemSpec', oemSpecSchema);
exports.OEMSpecModel = OEMSpecModel;
