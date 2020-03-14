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
exports.Mutation = exports.sdl = void 0;
const component_1 = require("../types/component");
const queryResponse_1 = require("../types/queryResponse");
exports.sdl = `
  type Mutation {
    addComponent(input: ComponentInput!): QueryResponse
    updateComponent(input: ComponentInput!): QueryResponse
    removeComponent(id: String!): QueryResponse
  }
`;
exports.Mutation = {
    addComponent: (parent, { input }, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        // Set timestamps right away
        // input.createdAt = new Date().toISOString();
        // input.modifiedAt = input.createdAt;
        const doc = yield new component_1.ComponentModel(input).save();
        return new queryResponse_1.QueryResponse(200, 'Added', [doc]);
    }),
    updateComponent: (parent, { input }, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        // input.modifiedAt = new Date().toISOString();
        const doc = yield component_1.ComponentModel.findByIdAndUpdate(input._id, input, { new: true });
        return new queryResponse_1.QueryResponse(200, 'Updated', [doc]);
    }),
    removeComponent: (parent, { id }, context, info) => __awaiter(void 0, void 0, void 0, function* () {
        const doc = yield component_1.ComponentModel.findByIdAndDelete(id);
        return new queryResponse_1.QueryResponse(200, 'Deleted', [doc]);
    }),
};
