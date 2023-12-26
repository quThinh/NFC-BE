"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TransformInterceptor = void 0;
var common_1 = require("@nestjs/common");
var operators_1 = require("rxjs/operators");
var logger_1 = require("../../shared/logger");
var logger = (0, logger_1.getLogger)('Response');
var TransformInterceptor = /** @class */ (function () {
    function TransformInterceptor() {
    }
    TransformInterceptor.prototype.intercept = function (context, next) {
        var statusCode = context.switchToHttp().getResponse().statusCode;
        return next.handle().pipe((0, operators_1.map)(function (data) { return (logger.info("API Response Status Code: ".concat(statusCode)),
            {
                meta: {
                    code: context.switchToHttp().getResponse().statusCode,
                    message: data.message ? data.message : 'Successful',
                    pagination: data.pagination
                },
                data: data.results ? data.results : data
            }); }));
    };
    TransformInterceptor = __decorate([
        (0, common_1.Injectable)()
    ], TransformInterceptor);
    return TransformInterceptor;
}());
exports.TransformInterceptor = TransformInterceptor;
