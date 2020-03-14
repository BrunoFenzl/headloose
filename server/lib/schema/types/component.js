"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentModel = exports.Component = exports.sdl = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const attributes_1 = require("./attributes");
const componentInputSDL = `
  input ComponentInput {
    _id: String
    _type: String
    children: [String]
    parent: String
    name: String
    attributes: AttributesInput
  }
`;
const componentSDL = `
  type Component {
    _id: ID!
    _type: String!
    children: [String]!
    parent: String
    createdAt: Float!
    updatedAt: Float!
    name: String!
    attributes: Attributes
  }
`;
exports.sdl = [
    componentInputSDL,
    componentSDL,
];
let Component = /** @class */ (() => {
    let Component = class Component {
    };
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Component.prototype, "_type", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Array)
    ], Component.prototype, "children", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Component.prototype, "parent", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Component.prototype, "createdAt", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Component.prototype, "updatedAt", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Component.prototype, "name", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", attributes_1.Attributes)
    ], Component.prototype, "attributes", void 0);
    Component = __decorate([
        typegoose_1.modelOptions({ schemaOptions: { timestamps: true } })
    ], Component);
    return Component;
})();
exports.Component = Component;
;
exports.ComponentModel = typegoose_1.getModelForClass(Component);
