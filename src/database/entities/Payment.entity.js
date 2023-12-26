"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Payment = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Payment.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true })
    ], Payment.prototype, "sessionId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'transfer_token', type: 'varchar', nullable: true })
    ], Payment.prototype, "transferToken");
    __decorate([
        (0, typeorm_1.Column)({ name: 'payment_token', type: 'varchar', nullable: true })
    ], Payment.prototype, "paymentToken");
    __decorate([
        (0, typeorm_1.Column)({ name: 'vault_address', type: 'varchar', nullable: true })
    ], Payment.prototype, "vaultAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'POS_address', type: 'varchar', nullable: true })
    ], Payment.prototype, "POSAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'amount', type: 'varchar', nullable: true })
    ], Payment.prototype, "amount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'deadline', type: 'int', nullable: true })
    ], Payment.prototype, "deadLine");
    __decorate([
        (0, typeorm_1.Column)({ name: 'payer', type: 'varchar', nullable: true })
    ], Payment.prototype, "payer");
    __decorate([
        (0, typeorm_1.Column)({ name: 'sent', type: 'bool', nullable: true })
    ], Payment.prototype, "sent");
    __decorate([
        (0, typeorm_1.Column)({ name: 'verified', type: 'bool', nullable: true })
    ], Payment.prototype, "verified");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Payment.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Payment.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Payment.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Payment.prototype, "updateUpdateDates");
    Payment = __decorate([
        (0, typeorm_1.Entity)('payment')
    ], Payment);
    return Payment;
}());
exports.Payment = Payment;
