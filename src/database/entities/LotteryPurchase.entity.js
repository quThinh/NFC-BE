"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LotteryPurchases = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var LotteryPurchases = /** @class */ (function () {
    function LotteryPurchases() {
    }
    LotteryPurchases.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    LotteryPurchases.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int' })
    ], LotteryPurchases.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'lottery_id', type: 'int', nullable: true })
    ], LotteryPurchases.prototype, "lotteryId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 20, nullable: true })
    ], LotteryPurchases.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'buyer', type: 'varchar', length: 250, nullable: true })
    ], LotteryPurchases.prototype, "buyer");
    __decorate([
        (0, typeorm_1.Column)({ name: 'ticket_ids_array', type: 'varchar', length: 1000, nullable: true })
    ], LotteryPurchases.prototype, "ticketIdsArray");
    __decorate([
        (0, typeorm_1.Column)({ name: 'ticket_numbers_array', type: 'varchar', length: 1000, nullable: true })
    ], LotteryPurchases.prototype, "ticketNumbersArray");
    __decorate([
        (0, typeorm_1.Column)({ name: 'number_ticket', type: 'int', nullable: true })
    ], LotteryPurchases.prototype, "numberTickets");
    __decorate([
        (0, typeorm_1.Column)({ name: 'reward', type: 'int', nullable: true, "default": 0 })
    ], LotteryPurchases.prototype, "reward");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], LotteryPurchases.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], LotteryPurchases.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], LotteryPurchases.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], LotteryPurchases.prototype, "updateUpdateDates");
    LotteryPurchases = __decorate([
        (0, typeorm_1.Entity)('lottery_purchases')
    ], LotteryPurchases);
    return LotteryPurchases;
}());
exports.LotteryPurchases = LotteryPurchases;
