"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WorkerModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var entities_1 = require("../../database/entities");
var common_module_1 = require("../common/common.module");
var schedule_1 = require("@nestjs/schedule");
var worker_manager_service_1 = require("./worker-manager.service");
var WorkerModule = /** @class */ (function () {
    function WorkerModule() {
    }
    WorkerModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([entities_1.Address, entities_1.LatestBlock, entities_1.Config]),
                common_module_1.CommonModule,
                schedule_1.ScheduleModule.forRoot()],
            controllers: [],
            exports: [typeorm_1.TypeOrmModule, worker_manager_service_1.WorkerManagerService],
            providers: [worker_manager_service_1.WorkerManagerService]
        })
    ], WorkerModule);
    return WorkerModule;
}());
exports.WorkerModule = WorkerModule;
