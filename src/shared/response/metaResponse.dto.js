"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MetaResponse = void 0;
var pagination_1 = require("../../config/rest/pagination");
var swagger_1 = require("@nestjs/swagger");
var MetaResponse = /** @class */ (function () {
    function MetaResponse() {
    }
    __decorate([
        (0, swagger_1.ApiResponseProperty)({
            type: Number,
            example: 200
        })
    ], MetaResponse.prototype, "code");
    __decorate([
        (0, swagger_1.ApiResponseProperty)({
            type: String,
            example: 'Successful'
        })
    ], MetaResponse.prototype, "message");
    __decorate([
        (0, swagger_1.ApiResponseProperty)({
            type: pagination_1.Pagination,
            example: {
                itemCount: 10,
                totalItems: 100,
                itemsPerPage: 10,
                totalPages: 10,
                currentPage: 0
            }
        })
    ], MetaResponse.prototype, "pagination");
    return MetaResponse;
}());
exports.MetaResponse = MetaResponse;
