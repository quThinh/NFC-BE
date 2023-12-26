"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommonModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var currency_service_1 = require("./currency.service");
var blockchain_service_1 = require("./blockchain.service");
var entities_1 = require("../../database/entities");
var CommonModule = /** @class */ (function () {
    function CommonModule() {
    }
    CommonModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([entities_1.CurrencyConfig, entities_1.PowerPoolConfig, entities_1.LotteryConfig]),
                common_1.HttpModule,
            ],
            exports: [typeorm_1.TypeOrmModule, currency_service_1.CurrencyRegistryService, blockchain_service_1.BlockchainService,],
            providers: [currency_service_1.CurrencyRegistryService, blockchain_service_1.BlockchainService,]
        })
    ], CommonModule);
    return CommonModule;
}());
exports.CommonModule = CommonModule;
