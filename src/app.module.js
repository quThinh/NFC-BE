"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var database_config_1 = require("./config/database.config");
var auth_module_1 = require("./modules/user/auth.module");
var common_module_1 = require("./modules/common/common.module");
var transform_interceptor_1 = require("./config/rest/transform.interceptor");
var core_1 = require("@nestjs/core");
var exception_filter_1 = require("./config/exception/exception.filter");
// import { PowerPoolModule } from './modules/powerpool/power-pool.module';
// import { LotteryModule } from './modules/lottery/lottery.module';
var AppModule = /** @class */ (function () {
    function AppModule(connection) {
        this.connection = connection;
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({ isGlobal: true }),
                typeorm_1.TypeOrmModule.forRoot(database_config_1.databaseConfig),
                auth_module_1.AuthUserModule,
                common_module_1.CommonModule,
                // PowerPoolModule,
                // LotteryModule
            ],
            controllers: [app_controller_1.AppController],
            providers: [
                app_service_1.AppService,
                {
                    provide: core_1.APP_INTERCEPTOR,
                    useClass: transform_interceptor_1.TransformInterceptor
                },
                {
                    provide: core_1.APP_FILTER,
                    useClass: exception_filter_1.ExceptionFilter
                },
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
