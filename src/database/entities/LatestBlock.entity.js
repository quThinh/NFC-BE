"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LatestBlock = void 0;
var Utils_1 = require("../../shared/Utils");
var typeorm_1 = require("typeorm");
var LatestBlock = /** @class */ (function () {
    function LatestBlock() {
    }
    LatestBlock.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    LatestBlock.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)()
    ], LatestBlock.prototype, "currency");
    __decorate([
        (0, typeorm_1.Column)({ name: 'block_number', nullable: false })
    ], LatestBlock.prototype, "blockNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint' })
    ], LatestBlock.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint' })
    ], LatestBlock.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], LatestBlock.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], LatestBlock.prototype, "updateUpdateDates");
    LatestBlock = __decorate([
        (0, typeorm_1.Entity)('latest_block')
    ], LatestBlock);
    return LatestBlock;
}());
exports.LatestBlock = LatestBlock;
