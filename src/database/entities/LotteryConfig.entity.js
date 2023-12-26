"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LotteryConfig = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var LotteryConfig = /** @class */ (function () {
    function LotteryConfig() {
    }
    LotteryConfig.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    LotteryConfig.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint' })
    ], LotteryConfig.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'admin_address', type: 'varchar', nullable: true })
    ], LotteryConfig.prototype, "adminAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'operator_address', type: 'varchar', nullable: true })
    ], LotteryConfig.prototype, "operatorAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'treasury_address', type: 'varchar', nullable: true })
    ], LotteryConfig.prototype, "treasuryAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'max_tickets_per_buy_or_claim', type: 'int', nullable: true, "default": 100 })
    ], LotteryConfig.prototype, "maxNumberTicketsPerBuyOrClaim");
    __decorate([
        (0, typeorm_1.Column)({ name: 'injector_address', type: 'varchar', nullable: true })
    ], LotteryConfig.prototype, "injectorAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'random_number_generator', type: 'varchar', nullable: true })
    ], LotteryConfig.prototype, "randomNumberGenerator");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], LotteryConfig.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], LotteryConfig.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], LotteryConfig.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], LotteryConfig.prototype, "updateUpdateDates");
    LotteryConfig = __decorate([
        (0, typeorm_1.Entity)('lottery_config')
    ], LotteryConfig);
    return LotteryConfig;
}());
exports.LotteryConfig = LotteryConfig;
