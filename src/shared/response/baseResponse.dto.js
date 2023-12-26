"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BaseResponsePagination = exports.BaseResponse = void 0;
var swagger_1 = require("@nestjs/swagger");
var metaResponse_dto_1 = require("./metaResponse.dto");
var BaseResponse = /** @class */ (function () {
    function BaseResponse() {
    }
    __decorate([
        (0, swagger_1.ApiResponseProperty)({
            type: metaResponse_dto_1.MetaResponse,
            example: {
                code: 200,
                message: 'Successful'
            }
        })
    ], BaseResponse.prototype, "meta");
    return BaseResponse;
}());
exports.BaseResponse = BaseResponse;
var BaseResponsePagination = /** @class */ (function () {
    function BaseResponsePagination() {
    }
    __decorate([
        (0, swagger_1.ApiResponseProperty)({
            type: metaResponse_dto_1.MetaResponse
        })
    ], BaseResponsePagination.prototype, "meta");
    return BaseResponsePagination;
}());
exports.BaseResponsePagination = BaseResponsePagination;
