"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
exports.errorHandler = (err) => {
    console.log('Error while running resolver', { error: err });
    //return err;
    return new Error('Internal server error.');
};
