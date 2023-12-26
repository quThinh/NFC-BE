"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WrongToken = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var WrongToken = /** @class */ (function () {
    function WrongToken() {
    }
    WrongToken.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    WrongToken.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint' })
    ], WrongToken.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token_address', type: 'varchar', nullable: true })
    ], WrongToken.prototype, "tokenAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token_amount', type: 'int', nullable: true })
    ], WrongToken.prototype, "tokenAmount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], WrongToken.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], WrongToken.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], WrongToken.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], WrongToken.prototype, "updateUpdateDates");
    WrongToken = __decorate([
        (0, typeorm_1.Entity)('wrong_token')
    ], WrongToken);
    return WrongToken;
}());
exports.WrongToken = WrongToken;
