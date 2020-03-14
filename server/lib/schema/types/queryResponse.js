"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryResponse = exports.sdl = exports.queryResponseSDL = void 0;
exports.queryResponseSDL = `
  type QueryResponse {
    code: Int!
    message: String!
    data: [Component!]!
  }
`;
exports.sdl = [
    exports.queryResponseSDL,
];
class QueryResponse {
    constructor(code, message, data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
exports.QueryResponse = QueryResponse;
;
