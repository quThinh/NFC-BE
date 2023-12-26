"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Ticket = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var Ticket = /** @class */ (function () {
    function Ticket() {
    }
    Ticket.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Ticket.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'ticket_id', type: 'int', nullable: false, unique: true })
    ], Ticket.prototype, "ticketId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'number', type: 'int', nullable: true })
    ], Ticket.prototype, "number");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'boolean', nullable: true })
    ], Ticket.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'lottery_purchase_id', type: 'int', nullable: true })
    ], Ticket.prototype, "lotteryPurchaseId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Ticket.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Ticket.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Ticket.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Ticket.prototype, "updateUpdateDates");
    Ticket = __decorate([
        (0, typeorm_1.Entity)('ticket')
    ], Ticket);
    return Ticket;
}());
exports.Ticket = Ticket;
