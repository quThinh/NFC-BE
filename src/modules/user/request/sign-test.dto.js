"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SignTest = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var SignTest = /** @class */ (function () {
    function SignTest() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: 'signature'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6),
        (0, class_validator_1.MaxLength)(500)
    ], SignTest.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number,
            example: Date.now()
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], SignTest.prototype, "signTime");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number,
            example: 37
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], SignTest.prototype, "chainId");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: 'private key'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6),
        (0, class_validator_1.MaxLength)(100)
    ], SignTest.prototype, "privateKey");
    return SignTest;
}());
exports.SignTest = SignTest;
