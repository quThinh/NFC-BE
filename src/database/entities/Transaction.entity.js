"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Transaction = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Transaction.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Transaction.prototype.isTemporaryTransaction = function () {
        if (!this.txid) {
            return true;
        }
        if (this.txid.startsWith('TMP_')) {
            return true;
        }
        return false;
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'int', unsigned: true })
    ], Transaction.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'from_network', type: 'int', nullable: true })
    ], Transaction.prototype, "fromNetwork");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'from_address', nullable: false })
    ], Transaction.prototype, "fromAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'to_network', type: 'int', nullable: true })
    ], Transaction.prototype, "toNetwork");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'to_address', nullable: false })
    ], Transaction.prototype, "toAddress");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'origin_txid', nullable: false })
    ], Transaction.prototype, "originTxid");
    __decorate([
        (0, typeorm_1.Column)({ name: 'origin_block_number', type: 'bigint', nullable: true })
    ], Transaction.prototype, "originBlockNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'origin_block_hash', type: 'varchar', length: 100, nullable: true })
    ], Transaction.prototype, "originBlockHash");
    __decorate([
        (0, typeorm_1.Column)({ name: 'origin_block_timestamp', type: 'bigint', nullable: true })
    ], Transaction.prototype, "originBlockTimestamp");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'txid', nullable: true })
    ], Transaction.prototype, "txid");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 200, name: 'currency', nullable: false })
    ], Transaction.prototype, "currency");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 100, name: 'currency_symbol', nullable: false })
    ], Transaction.prototype, "currencySymbol");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 20, name: 'type', nullable: false })
    ], Transaction.prototype, "type");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'amount',
            type: 'varchar',
            length: 5000,
            nullable: false
        })
    ], Transaction.prototype, "amount");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 5000, name: 'error_message', nullable: true })
    ], Transaction.prototype, "errorMessage");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 20, name: 'status', nullable: false })
    ], Transaction.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 100, name: 'unsigned_txid', nullable: true })
    ], Transaction.prototype, "unsignedTxid");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_number', type: 'bigint', nullable: true })
    ], Transaction.prototype, "blockNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_hash', type: 'varchar', length: 100, nullable: true })
    ], Transaction.prototype, "blockHash");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_timestamp', type: 'bigint', nullable: true })
    ], Transaction.prototype, "blockTimestamp");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'fee_amount',
            type: 'decimal',
            precision: 40,
            scale: 8,
            nullable: true
        })
    ], Transaction.prototype, "feeAmount");
    __decorate([
        (0, typeorm_1.Column)('text', { name: 'unsigned_raw', nullable: true })
    ], Transaction.prototype, "unsignedRaw");
    __decorate([
        (0, typeorm_1.Column)('text', { name: 'signed_raw', nullable: true })
    ], Transaction.prototype, "signedRaw");
    __decorate([
        (0, typeorm_1.Column)({ name: 'retry_timestamp', type: 'bigint', nullable: true, "default": true })
    ], Transaction.prototype, "retryTimestamp");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Transaction.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Transaction.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Transaction.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Transaction.prototype, "updateUpdateDates");
    Transaction = __decorate([
        (0, typeorm_1.Entity)('transaction'),
        (0, typeorm_1.Index)('block_hash', ['blockHash'], { unique: false }),
        (0, typeorm_1.Index)('block_number', ['blockNumber'], { unique: false }),
        (0, typeorm_1.Index)('block_timestamp', ['blockTimestamp'], { unique: false }),
        (0, typeorm_1.Index)('created_at', ['createdAt'], { unique: false }),
        (0, typeorm_1.Index)('from_network', ['fromNetwork'], { unique: false }),
        (0, typeorm_1.Index)('from_address', ['fromAddress'], { unique: false }),
        (0, typeorm_1.Index)('to_network', ['toAddress'], { unique: false }),
        (0, typeorm_1.Index)('to_address', ['toNetwork'], { unique: false }),
        (0, typeorm_1.Index)('origin_txid', ['originTxid'], { unique: false }),
        (0, typeorm_1.Index)('origin_block_number', ['originBlockNumber'], { unique: false }),
        (0, typeorm_1.Index)('origin_block_hash', ['originBlockHash'], { unique: false }),
        (0, typeorm_1.Index)('origin_block_timestamp', ['originBlockTimestamp'], { unique: false }),
        (0, typeorm_1.Index)('txid', ['txid'], { unique: false }),
        (0, typeorm_1.Index)('unsigned_txid', ['unsignedTxid'], { unique: false }),
        (0, typeorm_1.Index)('status', ['status'], { unique: false }),
        (0, typeorm_1.Index)('type', ['type'], { unique: false }),
        (0, typeorm_1.Index)('retry_timestamp', ['retryTimestamp'], { unique: false }),
        (0, typeorm_1.Index)('updated_at', ['updatedAt'], { unique: false })
    ], Transaction);
    return Transaction;
}());
exports.Transaction = Transaction;
