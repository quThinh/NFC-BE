"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MailJob = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var MailJob = /** @class */ (function () {
    function MailJob() {
    }
    MailJob.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    MailJob.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true })
    ], MailJob.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'sender_name', type: 'varchar', length: 100, nullable: true })
    ], MailJob.prototype, "senderName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'sender_address', type: 'varchar', length: 100, nullable: false })
    ], MailJob.prototype, "senderAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'recipient_address', type: 'varchar', length: 100, nullable: false })
    ], MailJob.prototype, "recipientAddress");
    __decorate([
        (0, typeorm_1.Column)({ name: 'title', type: 'varchar', length: 254, nullable: true })
    ], MailJob.prototype, "title");
    __decorate([
        (0, typeorm_1.Column)({ name: 'template_name', type: 'varchar', length: 50, nullable: false })
    ], MailJob.prototype, "templateName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'content', type: 'text', nullable: true })
    ], MailJob.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)({ name: 'is_sent', type: 'tinyint', width: 1, nullable: true, "default": 0 })
    ], MailJob.prototype, "isSent");
    __decorate([
        (0, typeorm_1.Column)({ name: 'retry_count', type: 'tinyint', width: 4, nullable: true, "default": 0 })
    ], MailJob.prototype, "retryCount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], MailJob.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], MailJob.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], MailJob.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], MailJob.prototype, "updateUpdateDates");
    MailJob = __decorate([
        (0, typeorm_1.Entity)('mail_job')
    ], MailJob);
    return MailJob;
}());
exports.MailJob = MailJob;
