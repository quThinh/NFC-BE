"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginWallet = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var LoginWallet = /** @class */ (function () {
    function LoginWallet() {
    }
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: 'address'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6),
        (0, class_validator_1.MaxLength)(100)
    ], LoginWallet.prototype, "address");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: Number,
            example: Date.now()
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumber)()
    ], LoginWallet.prototype, "signTime");
    __decorate([
        (0, swagger_1.ApiProperty)({
            type: String,
            example: 'signature'
        }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.MinLength)(6),
        (0, class_validator_1.MaxLength)(500)
    ], LoginWallet.prototype, "signature");
    return LoginWallet;
}());
exports.LoginWallet = LoginWallet;
