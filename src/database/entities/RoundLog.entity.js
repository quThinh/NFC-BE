"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoundLog = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var RoundLog = /** @class */ (function () {
    function RoundLog() {
    }
    RoundLog.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    RoundLog.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'epoch_number', type: 'bigint', nullable: false, unique: true })
    ], RoundLog.prototype, "epochNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'tokenIds', type: 'varchar', nullable: true, "default": null })
    ], RoundLog.prototype, "tokenIds");
    __decorate([
        (0, typeorm_1.Column)({ name: 'start_time_stamp', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "startTimeStamp");
    __decorate([
        (0, typeorm_1.Column)({ name: 'end_time_stamp', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "endTimeStamp");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'varchar', length: 20, nullable: false })
    ], RoundLog.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'total_ticket', type: 'int', nullable: true, "default": 0 })
    ], RoundLog.prototype, "totalTicket");
    __decorate([
        (0, typeorm_1.Column)({ name: 'winning_ticket', type: 'int', nullable: true })
    ], RoundLog.prototype, "winningTiket");
    __decorate([
        (0, typeorm_1.Column)({ name: 'reward_amount', type: 'int', nullable: true })
    ], RoundLog.prototype, "rewardAmount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'reward_claimed', type: 'boolean', nullable: true, "default": false })
    ], RoundLog.prototype, "rewardClaimed");
    __decorate([
        (0, typeorm_1.Column)({ name: 'treasury_amount', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "treasuryAmount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'treasury_claimed', type: 'boolean', nullable: true, "default": false })
    ], RoundLog.prototype, "treasuryClaimed");
    __decorate([
        (0, typeorm_1.Column)({ name: 'result', type: 'int', nullable: true })
    ], RoundLog.prototype, "result");
    __decorate([
        (0, typeorm_1.Column)({ name: 'oracle_state', type: 'varchar', length: 50, nullable: true })
    ], RoundLog.prototype, "oracleState");
    __decorate([
        (0, typeorm_1.Column)({ name: 'request_id', type: 'varchar', length: 100, nullable: true })
    ], RoundLog.prototype, "requestId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
    ], RoundLog.prototype, "blockHash");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_time_stamp', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "blockTimeStamp");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_number', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "blockNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'chain_id', type: 'varchar', nullable: true })
    ], RoundLog.prototype, "chainId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], RoundLog.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], RoundLog.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], RoundLog.prototype, "updateUpdateDates");
    RoundLog = __decorate([
        (0, typeorm_1.Entity)('round_log')
    ], RoundLog);
    return RoundLog;
}());
exports.RoundLog = RoundLog;
