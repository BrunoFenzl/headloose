"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const graphql_type_json_1 = __importStar(require("graphql-type-json"));
const option_1 = require("./types/option");
const attributes_1 = require("./types/attributes");
const component_1 = require("./types/component");
const queryResponse_1 = require("./types/queryResponse");
const mutations_1 = require("./resolvers/mutations");
const queries_1 = require("./resolvers/queries");
const typeDefs = [
    'scalar JSON',
    'scalar JSONObject',
    mutations_1.sdl,
    queries_1.sdl,
    ...option_1.sdl,
    ...attributes_1.sdl,
    ...component_1.sdl,
    ...queryResponse_1.sdl,
];
const resolvers = {
    JSON: graphql_type_json_1.default,
    JSONObject: graphql_type_json_1.GraphQLJSONObject,
    Attributes: attributes_1.AttributesResolver,
    Mutation: mutations_1.Mutation,
    Query: queries_1.Query
};
const schema = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers
});
exports.default = schema;
