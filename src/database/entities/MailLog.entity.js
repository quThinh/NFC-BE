"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MailLog = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var MailLog = /** @class */ (function () {
    function MailLog() {
    }
    MailLog.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true })
    ], MailLog.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'job_id', type: 'int', nullable: false })
    ], MailLog.prototype, "jobId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'status', type: 'varchar', nullable: true })
    ], MailLog.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ name: 'msg', type: 'text', nullable: true })
    ], MailLog.prototype, "msg");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], MailLog.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], MailLog.prototype, "updateCreateDates");
    MailLog = __decorate([
        (0, typeorm_1.Entity)('mail_log'),
        (0, typeorm_1.Index)('job_id', ['jobId'], { unique: false })
    ], MailLog);
    return MailLog;
}());
exports.MailLog = MailLog;
