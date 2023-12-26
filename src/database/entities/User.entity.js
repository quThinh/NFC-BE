"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    User.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' })
    ], User.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'wallet', type: 'varchar', length: 255, nullable: true })
    ], User.prototype, "wallet");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 25, nullable: true, "default": 'request' })
    ], User.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], User.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], User.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], User.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], User.prototype, "updateUpdateDates");
    User = __decorate([
        (0, typeorm_1.Entity)('user'),
        (0, typeorm_1.Index)('status', ['status'], { unique: false })
    ], User);
    return User;
}());
exports.User = User;
