"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ExceptionFilter = void 0;
var common_1 = require("@nestjs/common");
var emptyObject_dto_1 = require("../../shared/response/emptyObject.dto");
var logger_1 = require("../../shared/logger");
var logger = (0, logger_1.getLogger)('Exceptionfilter');
var ExceptionFilter = /** @class */ (function () {
    function ExceptionFilter() {
    }
    ExceptionFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var request = ctx.getRequest();
        var response = ctx.getResponse();
        var status = exception instanceof common_1.HttpException ? exception.getStatus() : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        // log data
        logger.error("Body: ".concat(JSON.stringify(request.body)));
        logger.error("Query: ".concat(JSON.stringify(request.query)));
        logger.error("Params: ".concat(JSON.stringify(request.params)));
        logger.error(exception);
        var message = exception instanceof common_1.HttpException ? exception.getResponse() : 'Internal server error';
        if (typeof message == 'object') {
            message = message.message ? message.message : message.error || message;
        }
        response.status(status).json({
            meta: {
                code: status,
                message: message
            },
            data: new emptyObject_dto_1.EmptyObject()
        });
    };
    ExceptionFilter = __decorate([
        (0, common_1.Catch)()
    ], ExceptionFilter);
    return ExceptionFilter;
}());
exports.ExceptionFilter = ExceptionFilter;
