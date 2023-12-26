"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PlayLog = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var enums_1 = require("../../../../../../../../../src/shared/enums");
var PlayLog = /** @class */ (function () {
    function PlayLog() {
    }
    PlayLog.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    PlayLog.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true })
    ], PlayLog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'epoch_number', type: 'bigint', nullable: false })
    ], PlayLog.prototype, "epochNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'player_address', type: 'varchar', nullable: false })
    ], PlayLog.prototype, "playerAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'ticket_id', type: 'bigint', nullable: false })
    ], PlayLog.prototype, "ticketId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token_id', type: 'bigint', nullable: false })
    ], PlayLog.prototype, "tokenId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'enum', "enum": enums_1.OnchainStatus, "default": enums_1.OnchainStatus.CONFIRMING })
    ], PlayLog.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'refunded', type: 'varchar', length: 50, nullable: true })
    ], PlayLog.prototype, "refunded");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
    ], PlayLog.prototype, "blockHash");
    __decorate([
        (0, typeorm_1.Column)({ name: 'claimed', type: 'boolean', nullable: true, "default": false })
    ], PlayLog.prototype, "claimed");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_time_stamp', type: 'bigint', nullable: true })
    ], PlayLog.prototype, "blockTimeStamp");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_number', type: 'bigint', nullable: true })
    ], PlayLog.prototype, "blockNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'chain_id', type: 'varchar', nullable: true })
    ], PlayLog.prototype, "chainId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], PlayLog.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], PlayLog.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], PlayLog.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], PlayLog.prototype, "updateUpdateDates");
    PlayLog = __decorate([
        (0, typeorm_1.Entity)('play_log')
    ], PlayLog);
    return PlayLog;
}());
exports.PlayLog = PlayLog;
