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
exports.AttributesResolver = exports.Attributes = exports.sdl = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const attributesInputSDL = `
  input AttributesInput {
    meta: JSON
    classnames: [String]

    title: String
    slug: String
    order: Int

    model: String
    label: String
    maxlength: Int
    minlength: Int
    min: Int
    max: Int
    step: Int
    size: Int
    placeholder: String
    disabled: Boolean
    readonly: Boolean
    required: Boolean
    options: [OptionsInput]

    no_gutters: Boolean

    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;
const attributesSDL = `
  interface Attributes {
    """Meta will hold non essential fields as JSON that vary between components"""
    meta: JSON
    classnames: [String]!
  }
`;
const pageAttributesSDL = `
  type PageAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    title: String!
    slug: String!
    order: Int
  }
`;
const formControlAttributesSDL = `
  type FormControlAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    model: String
    label: String
    maxlength: Int
    minlength: Int
    min: Int
    max: Int
    step: Int
    size: Int
    placeholder: String
    disabled: Boolean
    readonly: Boolean
    required: Boolean
    options: [Option!]
  }
`;
const rowAttributesSDL = `
  type RowAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    no_gutters: Boolean
  }
`;
const columnAttributesSDL = `
  type ColumnAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;
const genericComponentAttributesSDL = `
  type GenericComponentAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
  }
`;
exports.sdl = [
    attributesInputSDL,
    attributesSDL,
    pageAttributesSDL,
    formControlAttributesSDL,
    rowAttributesSDL,
    columnAttributesSDL,
    genericComponentAttributesSDL
];
let Attributes = /** @class */ (() => {
    class Attributes {
    }
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Attributes.prototype, "meta", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Array)
    ], Attributes.prototype, "classnames", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Attributes.prototype, "model", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Attributes.prototype, "label", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "maxlength", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "minlength", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "min", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "max", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "step", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Number)
    ], Attributes.prototype, "size", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", String)
    ], Attributes.prototype, "placeholder", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Boolean)
    ], Attributes.prototype, "disabled", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Boolean)
    ], Attributes.prototype, "readonly", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Boolean)
    ], Attributes.prototype, "required", void 0);
    __decorate([
        typegoose_1.prop(),
        __metadata("design:type", Array)
    ], Attributes.prototype, "options", void 0);
    return Attributes;
})();
exports.Attributes = Attributes;
;
exports.AttributesResolver = {
    __resolveType: (parent) => {
        console.log('resolver parent', parent);
        switch (parent.type) {
            case 'page':
                return 'PageAttributes';
            case 'column':
                return 'ColumnAttributes';
            case 'Row':
                return 'RowAttributes';
            default:
                return 'FormControlAttributes';
        }
    }
};
