"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketplace_inventoryModel = void 0;
const mongoose_1 = require("mongoose");
const marketplace_inventorySchema = new mongoose_1.Schema({
    dealer: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        immutable: true,
    },
    oemSpec: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'oemSpec',
        required: true,
        immutable: true,
    },
    carImage: {
        type: String,
        required: true,
    },
    odometer: {
        type: Number,
        required: true,
    },
    majorScratches: {
        type: String,
        required: true,
    },
    originalPaint: {
        type: Boolean,
        default: true,
    },
    noOfAccidents: {
        type: Number,
        default: 0,
    },
    noOfPreviousBuyers: {
        type: Number,
        default: 1,
    },
    registrationPlace: {
        type: String,
        required: true,
    },
}, { versionKey: false, timestamps: true });
const marketplace_inventoryModel = (0, mongoose_1.model)('marketplace_inventory', marketplace_inventorySchema);
exports.marketplace_inventoryModel = marketplace_inventoryModel;
