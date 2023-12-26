"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CurrencyConfig = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var CurrencyConfig = /** @class */ (function () {
    function CurrencyConfig() {
    }
    CurrencyConfig.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    CurrencyConfig.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)('int', { name: 'swap_id', nullable: false })
    ], CurrencyConfig.prototype, "swapId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'network', type: 'varchar', nullable: false })
    ], CurrencyConfig.prototype, "network");
    __decorate([
        (0, typeorm_1.Column)({ name: 'chain_name', type: 'varchar', nullable: true })
    ], CurrencyConfig.prototype, "chainName");
    __decorate([
        (0, typeorm_1.Column)({ name: 'chain_id', type: 'varchar', nullable: true })
    ], CurrencyConfig.prototype, "chainId");
    __decorate([
        (0, typeorm_1.Column)('int', { name: 'average_block_time', nullable: false })
    ], CurrencyConfig.prototype, "averageBlockTime");
    __decorate([
        (0, typeorm_1.Column)('int', { name: 'required_confirmations', nullable: false })
    ], CurrencyConfig.prototype, "requiredConfirmations");
    __decorate([
        (0, typeorm_1.Column)({ name: 'token_address', type: 'varchar', length: 200, nullable: true })
    ], CurrencyConfig.prototype, "tokenAddress");
    __decorate([
        (0, typeorm_1.Column)('int', { name: 'temp_required_confirmations', nullable: false })
    ], CurrencyConfig.prototype, "tempRequiredConfirmations");
    __decorate([
        (0, typeorm_1.Column)({ name: 'scan_api', type: 'varchar', length: 200, nullable: true })
    ], CurrencyConfig.prototype, "scanApi");
    __decorate([
        (0, typeorm_1.Column)({ name: 'rpc_endpoint', type: 'varchar', nullable: true })
    ], CurrencyConfig.prototype, "rpcEndpoint");
    __decorate([
        (0, typeorm_1.Column)({ name: 'explorer_endpoint', type: 'varchar', nullable: true })
    ], CurrencyConfig.prototype, "explorerEndpoint");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], CurrencyConfig.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], CurrencyConfig.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], CurrencyConfig.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], CurrencyConfig.prototype, "updateUpdateDates");
    CurrencyConfig = __decorate([
        (0, typeorm_1.Entity)('currency_config')
    ], CurrencyConfig);
    return CurrencyConfig;
}());
exports.CurrencyConfig = CurrencyConfig;
