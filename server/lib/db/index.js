"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function init() {
    mongoose_1.default.connect(process.env.MONGO_URL, { useNewUrlParser: true });
    const db = mongoose_1.default.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Database connected.');
    });
}
exports.init = init;
