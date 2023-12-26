"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthUserModule = void 0;
var common_1 = require("@nestjs/common");
var auth_service_1 = require("./auth.service");
var auth_controller_1 = require("./auth.controller");
var passport_1 = require("@nestjs/passport");
var jwt_1 = require("@nestjs/jwt");
var jwt_strategy_1 = require("./jwt.strategy");
var typeorm_1 = require("@nestjs/typeorm");
var entities_1 = require("../../database/entities");
var AuthUserModule = /** @class */ (function () {
    function AuthUserModule() {
    }
    AuthUserModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forFeature([entities_1.User, entities_1.RoundOnchain]),
                passport_1.PassportModule,
                jwt_1.JwtModule.register({
                    secret: process.env.JWT_SECRET_KEY,
                    signOptions: { expiresIn: process.env.JWT_EXPIRED }
                }),
            ],
            providers: [auth_service_1.AuthService, jwt_strategy_1.JwtStrategy],
            controllers: [auth_controller_1.AuthController]
        })
    ], AuthUserModule);
    return AuthUserModule;
}());
exports.AuthUserModule = AuthUserModule;
