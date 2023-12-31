"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Config = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
// import Kms from '../encrypt/Kms';
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Config.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' })
    ], Config.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'key', length: 255, nullable: false, unique: true })
    ], Config.prototype, "key");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'value',
            type: 'decimal',
            precision: 40,
            scale: 8,
            nullable: true
        })
    ], Config.prototype, "value");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Config.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Config.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Config.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Config.prototype, "updateUpdateDates");
    Config = __decorate([
        (0, typeorm_1.Entity)('config')
    ], Config);
    return Config;
}());
exports.Config = Config;
