"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LotteryOnChain = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var LotteryOnChain = /** @class */ (function () {
    function LotteryOnChain() {
    }
    LotteryOnChain.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    LotteryOnChain.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'lottery_id', type: 'int', nullable: false, unique: true })
    ], LotteryOnChain.prototype, "lotteryId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 20, nullable: true })
    ], LotteryOnChain.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'onchain_status', type: 'varchar', length: 20, nullable: true })
    ], LotteryOnChain.prototype, "onchainStatus");
    __decorate([
        (0, typeorm_1.Column)({ name: 'start_time', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "startTime");
    __decorate([
        (0, typeorm_1.Column)({ name: 'end_time', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "endTime");
    __decorate([
        (0, typeorm_1.Column)({ name: 'price_ticket', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "priceTicket");
    __decorate([
        (0, typeorm_1.Column)({ name: 'discount_divisor', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "discountDivisor");
    __decorate([
        (0, typeorm_1.Column)({ name: 'rewards_breakdown', type: 'varchar', length: 250, nullable: true })
    ], LotteryOnChain.prototype, "rewardsBreakdown");
    __decorate([
        (0, typeorm_1.Column)({ name: 'treasury_fee', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "treasuryFee");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token_per_bracket', type: 'varchar', length: 250, nullable: true })
    ], LotteryOnChain.prototype, "tokenPerBracket");
    __decorate([
        (0, typeorm_1.Column)({ name: 'count_winners_per_bracket', type: 'varchar', length: 250, nullable: true })
    ], LotteryOnChain.prototype, "countWinnersPerBracket");
    __decorate([
        (0, typeorm_1.Column)({ name: 'first_ticket_id', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "firstTicketId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'first_ticket_id_next_lottery', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "firstTicketIdNextLottery");
    __decorate([
        (0, typeorm_1.Column)({ name: 'amount_collected', type: 'bigint', "default": 0 })
    ], LotteryOnChain.prototype, "amountCollected");
    __decorate([
        (0, typeorm_1.Column)({ name: 'final_number', type: 'int', nullable: true })
    ], LotteryOnChain.prototype, "finalNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'injected_amount', type: 'int', nullable: true })
    ], LotteryOnChain.prototype, "injectedAmount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], LotteryOnChain.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], LotteryOnChain.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], LotteryOnChain.prototype, "updateUpdateDates");
    LotteryOnChain = __decorate([
        (0, typeorm_1.Entity)('lottery_on_chain')
    ], LotteryOnChain);
    return LotteryOnChain;
}());
exports.LotteryOnChain = LotteryOnChain;
