"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const optionsSchema = new mongoose_1.default.Schema({
    value: { type: String },
    label: { type: String },
});
const attributesSchema = new mongoose_1.default.Schema({
    meta: { type: String },
    classnames: [String],
    model: { type: String },
    label: { type: String },
    maxlength: { type: Number },
    minlength: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
    size: { type: Number },
    placeholder: { type: String },
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    required: { type: Boolean },
    options: [optionsSchema],
});
const componentSchema = new mongoose_1.default.Schema({
    _type: { type: String },
    children: { type: [String] },
    parent: { type: String },
    createdAt: { type: Date },
    modifiedAt: { type: Date },
    name: { type: String },
    attributes: attributesSchema,
});
exports.ComponentModel = mongoose_1.default.model('ComponentModel', componentSchema);
