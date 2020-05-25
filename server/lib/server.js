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
exports.App = void 0;
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const apollo_server_koa_1 = require("apollo-server-koa");
const schema_1 = __importDefault(require("./schema"));
const errors_1 = require("./errors");
const db_1 = require("./db");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = App();
        const port = process.env.PORT || 9000;
        app.listen(port);
        console.log(`listening on port ${port}`);
        db_1.init();
    });
}
function App() {
    const app = new koa_1.default();
    const router = new koa_router_1.default();
    const server = new apollo_server_koa_1.ApolloServer({
        schema: schema_1.default,
        context: ({ ctx }) => ctx,
        formatError: // returns koa context
        errors_1.errorHandler,
    });
    router.get('/health', ctxt => {
        ctxt.body = 'ok';
    });
    router.post('/graphql', server.getMiddleware());
    router.get('/graphql', server.getMiddleware());
    app.use(router.routes());
    app.use(router.allowedMethods());
    return app;
}
exports.App = App;
if (require.main === module) {
    main();
}
