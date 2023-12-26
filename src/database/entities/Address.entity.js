"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Address = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
// import Kms from '../encrypt/Kms';
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Address.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'address', type: 'varchar', length: 150 })
    ], Address.prototype, "address");
    __decorate([
        (0, typeorm_1.Column)('text', { name: 'secret', nullable: false })
    ], Address.prototype, "secret");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Address.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Address.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Address.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Address.prototype, "updateUpdateDates");
    Address = __decorate([
        (0, typeorm_1.Entity)('address')
    ], Address);
    return Address;
}());
exports.Address = Address;
