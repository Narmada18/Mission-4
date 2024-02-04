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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_js_1 = __importDefault(require("./config/db.js"));
const User_route_js_1 = __importDefault(require("./routes/User.route.js"));
const auth_middleware_js_1 = __importDefault(require("./middlewares/auth.middleware.js"));
const Marketplace_inventory_route_js_1 = __importDefault(require("./routes/Marketplace_inventory.route.js"));
const OEMSpec_route_js_1 = __importDefault(require("./routes/OEMSpec.route.js"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Enable CORS
app.use((0, cors_1.default)());
// Body parser
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send({ message: 'Welcome to the homepage' });
    }
    catch (error) {
        console.log('Error:', error);
        res.status(500).send({ message: 'Internal server error!', error });
    }
}));
// user routes
app.use("/user", User_route_js_1.default);
// Authentication middleware
app.use(auth_middleware_js_1.default);
// Marketplace routes
app.use("/marketplace", Marketplace_inventory_route_js_1.default);
// OEM-spec routes
app.use("/oemspec", OEMSpec_route_js_1.default);
// Wrong endpoint URL
app.use('*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.sendStatus(422);
}));
// App listener
app.listen(process.env.PORT || 8080, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(`Server is running on http://localhost:${process.env.PORT || 8080}`);
        console.log('⏳ Database connecting...');
        yield db_js_1.default;
        console.log('✅ Database connected.');
    }
    catch (error) {
        console.log('❌ Error:', error);
    }
}));
