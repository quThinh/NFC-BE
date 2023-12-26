"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Admin = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var Admin = /** @class */ (function () {
    function Admin() {
    }
    // @Column({ name: 'roles', default: Role.User })
    // role: Role;
    Admin.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Admin.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' })
    ], Admin.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'username', type: 'varchar', length: 80, nullable: false, unique: true })
    ], Admin.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)({ name: 'email', type: 'varchar', length: 191, nullable: false, unique: true })
    ], Admin.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ name: 'password', type: 'varchar', length: 255, nullable: false })
    ], Admin.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ name: 'avatar_url', type: 'varchar', length: 255, nullable: true })
    ], Admin.prototype, "avatarUrl");
    __decorate([
        (0, typeorm_1.Column)({ name: 'full_name', type: 'varchar', length: 100, nullable: true })
    ], Admin.prototype, "fullName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Admin.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Admin.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'is_active', type: 'tinyint', width: 1, nullable: false, "default": 0 })
    ], Admin.prototype, "isActive");
    __decorate([
        (0, typeorm_1.Column)({ name: 'is_active_2fa', type: 'tinyint', width: 1, nullable: false, "default": 0 })
    ], Admin.prototype, "isActive2fa");
    __decorate([
        (0, typeorm_1.Column)({ name: 'two_factor_authentication_secret', type: 'varchar', length: 255, nullable: true })
    ], Admin.prototype, "twoFactorAuthenticationSecret");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token', type: 'varchar', length: 255, nullable: true })
    ], Admin.prototype, "token");
    __decorate([
        (0, typeorm_1.Column)({ name: 'data', type: 'text', nullable: true })
    ], Admin.prototype, "data");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Admin.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Admin.prototype, "updateUpdateDates");
    Admin = __decorate([
        (0, typeorm_1.Entity)('admin')
    ], Admin);
    return Admin;
}());
exports.Admin = Admin;
