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
exports.Query = exports.sdl = void 0;
const component_1 = require("../types/component");
const queryResponse_1 = require("../types/queryResponse");
exports.sdl = `
  type Query {
    tree(id: String!): QueryResponse
    component(id: String!): QueryResponse
    components(ids: [String]!): QueryResponse
  }
`;
exports.Query = {
    tree: (parent, { id }, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
        const docs = [];
        function getDoc(_id) {
            return __awaiter(this, void 0, void 0, function* () {
                const res = yield component_1.ComponentModel.findById(_id);
                return res;
            });
        }
        function processData(_id) {
            return __awaiter(this, void 0, void 0, function* () {
                const doc = yield getDoc(_id);
                if (doc.children) {
                    for (let i = 0; i < doc.children.length; i++) {
                        const newId = doc.children[i];
                        docs.push(yield processData(newId));
                    }
                }
                return doc;
            });
        }
        docs.push(yield processData(id));
        return new queryResponse_1.QueryResponse(200, 'All good!', docs);
    }),
    component: (parent, { id }, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
        const doc = yield component_1.ComponentModel.findById(id);
        return new queryResponse_1.QueryResponse(200, 'All good!', [doc]);
    }),
    components: (parent, { ids }, ctx, info) => __awaiter(void 0, void 0, void 0, function* () {
        const docs = yield component_1.ComponentModel.find().where('_id').in(ids).exec();
        return new queryResponse_1.QueryResponse(200, 'All good!', docs);
    }),
};
