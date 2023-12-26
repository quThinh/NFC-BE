"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SeederModule = void 0;
var common_1 = require("@nestjs/common");
var seeder_1 = require("./seeder");
var typeorm_1 = require("@nestjs/typeorm");
var database_config_1 = require("../../config/database.config");
var seed_service_1 = require("./seed.service");
var entities_1 = require("../../database/entities");
var config_1 = require("@nestjs/config");
var SeederModule = /** @class */ (function () {
    function SeederModule() {
    }
    SeederModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
                typeorm_1.TypeOrmModule.forFeature([
                    entities_1.User,
                    entities_1.Admin,
                    entities_1.CurrencyConfig,
                ]),
            ],
            providers: [common_1.Logger, seeder_1.Seeder, seed_service_1.SeedService]
        })
    ], SeederModule);
    return SeederModule;
}());
exports.SeederModule = SeederModule;
