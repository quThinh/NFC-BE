"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Game = void 0;
var typeorm_1 = require("typeorm");
var Utils_1 = require("../../shared/Utils");
var GameResult;
(function (GameResult) {
    GameResult["WIN"] = "win";
    GameResult["LOSE"] = "lose";
    GameResult["CANCEL"] = "cancel";
})(GameResult || (GameResult = {}));
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.updateCreateDates = function () {
        this.createdAt = (0, Utils_1.nowInMillis)();
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    Game.prototype.updateUpdateDates = function () {
        this.updatedAt = (0, Utils_1.nowInMillis)();
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id', type: 'bigint', unsigned: true })
    ], Game.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'user_id', type: 'int', nullable: false })
    ], Game.prototype, "userId");
    __decorate([
        (0, typeorm_1.Column)({ name: 'epoch_number', type: 'int', nullable: false })
    ], Game.prototype, "epochNumber");
    __decorate([
        (0, typeorm_1.Column)({ name: 'result', type: 'varchar', length: 100, nullable: true })
    ], Game.prototype, "result");
    __decorate([
        (0, typeorm_1.Column)({ name: 'bet_amount', type: 'int', nullable: true })
    ], Game.prototype, "betAmount");
    __decorate([
        (0, typeorm_1.Column)({ name: 'created_at', type: 'bigint', nullable: true })
    ], Game.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.Column)({ name: 'updated_at', type: 'bigint', nullable: true })
    ], Game.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.BeforeInsert)()
    ], Game.prototype, "updateCreateDates");
    __decorate([
        (0, typeorm_1.BeforeUpdate)()
    ], Game.prototype, "updateUpdateDates");
    Game = __decorate([
        (0, typeorm_1.Entity)('game')
    ], Game);
    return Game;
}());
exports.Game = Game;
