"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PowerPoolConfig = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var PowerPoolConfig = /** @class */ (function () {
    function PowerPoolConfig() {
    }
    PowerPoolConfig.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    PowerPoolConfig.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint' })
    ], PowerPoolConfig.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'admin_address', type: 'varchar', nullable: true })
    ], PowerPoolConfig.prototype, "adminAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'paused', type: 'boolean', nullable: true })
    ], PowerPoolConfig.prototype, "paused");
    __decorate([
        (0, typeorm_1.Column)({ name: 'operator_address', type: 'varchar', nullable: true })
    ], PowerPoolConfig.prototype, "operatorAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'random_number_generator', type: 'varchar', nullable: true })
    ], PowerPoolConfig.prototype, "randomNumberGenerator");
    __decorate([
        (0, typeorm_1.Column)({ name: 'pool_size', type: 'bigint', nullable: true })
    ], PowerPoolConfig.prototype, "poolSize");
    __decorate([
        (0, typeorm_1.Column)({ name: 'treasury_fee', type: 'bigint', nullable: true })
    ], PowerPoolConfig.prototype, "treasuryFee");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], PowerPoolConfig.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], PowerPoolConfig.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], PowerPoolConfig.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], PowerPoolConfig.prototype, "updateUpdateDates");
    PowerPoolConfig = __decorate([
        (0, typeorm_1.Entity)('power_pool_config')
    ], PowerPoolConfig);
    return PowerPoolConfig;
}());
exports.PowerPoolConfig = PowerPoolConfig;
