"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.BlockchainService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var CurrencyConfig_entity_1 = require("../../database/entities/CurrencyConfig.entity");
var logger_1 = require("../../shared/logger");
var redis = require("redis");
var logger = (0, logger_1.getLogger)('BlockchainService');
var BlockchainService = /** @class */ (function () {
    function BlockchainService(httpService, currencyRegistryService, currencyConfigRepository) {
        this.httpService = httpService;
        this.currencyRegistryService = currencyRegistryService;
        this.currencyConfigRepository = currencyConfigRepository;
        this.currencyConfigMap = new Map();
    }
    BlockchainService.prototype.getConfig = function (coin) {
        return __awaiter(this, void 0, void 0, function () {
            var existedTk;
            return __generator(this, function (_a) {
                existedTk = this.currencyConfigMap.get(coin);
                if (existedTk) {
                    return [2 /*return*/, existedTk];
                }
                // // Get currency information
                // const currency = this.currencyRegistryService.getOneCurrency(coin);
                // let config = null;
                // // Firstly check whethere it has specific config
                // if (currency) {
                //   config = await this.currencyConfigRepository.findOne({
                //     currency: currency.symbol,
                //   });
                //   // If not, fallback to the config of family
                //   if (!config) {
                //     config = await this.currencyConfigRepository.findOne({
                //       currency: currency.platform,
                //     });
                //   }
                // } else {
                //   config = await this.currencyConfigRepository.findOne({
                //     currency: coin,
                //   });
                // }
                // this.currencyConfigMap.set(coin, config);
                return [2 /*return*/, this.currencyConfigMap.get(coin)];
            });
        });
    };
    BlockchainService.prototype.getApiEndpoint = function (coin) {
        return __awaiter(this, void 0, void 0, function () {
            var config;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConfig(coin)];
                    case 1:
                        config = _a.sent();
                        return [2 /*return*/, "".concat(config.internal_endpoint || config.internalEndpoint, "/api")];
                }
            });
        });
    };
    BlockchainService.prototype.getAddress = function (coin, params) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService.get("".concat(api, "/").concat(coin, "/address"), { params: params }).toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_1 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_1, "Could not create new address coin=".concat(coin, " params=").concat(JSON.stringify(params)))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.getBalance = function (systemSymbol, address) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(systemSymbol)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService
                                .get("".concat(api, "/").concat(systemSymbol, "/address/").concat(address, "/balance"))
                                .toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_2 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_2, "Could not get balance of coin=".concat(systemSymbol, " address=").concat(address))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param coin (eth, ...)
     * @param contractAddress
     * @returns {Promise<*>}
     */
    BlockchainService.prototype.getCurrencyConfiguration = function (coin, contractAddress) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService
                                .get("".concat(api, "/currency_config/").concat(contractAddress))
                                .toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_3 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_3, e_3.message)];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.getTx = function (coin, txid) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService.get("".concat(api, "/").concat(coin, "/tx/").concat(txid)).toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_4 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_4, "Could not get tx of coin=".concat(coin, " txid=").concat(txid))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.validateAddress = function (coin, address) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService
                                .get("".concat(api, "/").concat(coin, "/address/").concat(address, "/validate"))
                                .toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_5 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_5, "Could not validate coin=".concat(coin, " address=").concat(address))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.isNeedTag = function (coin, address) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService
                                .get("".concat(api, "/").concat(coin, "/address/").concat(address, "/tag"))
                                .toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_6 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_6, "Could not validate coin=".concat(coin, " address=").concat(address))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.notifyNewToken = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var pub;
            return __generator(this, function (_a) {
                pub = redis.createClient({
                    host: process.env.REDIS_HOST || 'localhost',
                    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379
                });
                pub.publish("PP70ExC8Hr", 'EVENT_NEW_ERC20_TOKEN_ADDED');
                return [2 /*return*/, true];
            });
        });
    };
    BlockchainService.prototype.notifyRemoveToken = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var pub;
            return __generator(this, function (_a) {
                pub = redis.createClient({
                    host: process.env.REDIS_HOST || 'localhost',
                    port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : 6379
                });
                pub.publish("PP70ExC8Hr", 'EVENT_NEW_ERC20_TOKEN_REMOVED');
                return [2 /*return*/, true];
            });
        });
    };
    BlockchainService.prototype.createAdaAccount = function (coin, params) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService.get("".concat(api, "/").concat(coin, "/account"), { params: params }).toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_7 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_7, "Could not create ADA account params=".concat(JSON.stringify(params)))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.getNormalizeAddress = function (coin, address) {
        return __awaiter(this, void 0, void 0, function () {
            var api, response, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.httpService
                                .get("".concat(api, "/").concat(coin, "/address/").concat(address, "/normalized"))
                                .toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_8 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_8, "Could not convert ".concat(address, " to a checksum address."))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    BlockchainService.prototype.getEstimateFee = function (coin, params) {
        return __awaiter(this, void 0, void 0, function () {
            var api, total_inputs, recent_withdrawal_fee, use_lower_network_fee, url, response, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getApiEndpoint(coin)];
                    case 1:
                        api = _a.sent();
                        logger.info("getApiEndpoint.... ".concat(api));
                        total_inputs = params.total_inputs, recent_withdrawal_fee = params.recent_withdrawal_fee, use_lower_network_fee = params.use_lower_network_fee;
                        url = "".concat(api, "/").concat(coin, "/estimate_fee?total_inputs=").concat(total_inputs);
                        if (recent_withdrawal_fee) {
                            url += "&recent_withdrawal_fee=".concat(recent_withdrawal_fee);
                        }
                        if (use_lower_network_fee) {
                            url += "&use_lower_network_fee=".concat(use_lower_network_fee);
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        logger.info("getApiEndpoint.... ".concat(url));
                        return [4 /*yield*/, this.httpService.get(url).toPromise()];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                    case 4:
                        e_9 = _a.sent();
                        return [2 /*return*/, this._forwardError(e_9, "Could not estimate fee for currency: ".concat(coin, " with params: ").concat(params, "."))];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    // When error happens on proxy server
    BlockchainService.prototype._forwardError = function (e, errLog) {
        return __awaiter(this, void 0, void 0, function () {
            var errMsg, data;
            return __generator(this, function (_a) {
                errMsg = e.toString();
                if (e.code === 'ECONNREFUSED') {
                    logger.error("".concat(errLog, ". Error=").concat(e.message));
                    throw new common_1.HttpException("blockchain service is not started yet...", common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                }
                if (e.response && e.response.data) {
                    data = e.response.data;
                    if (data.error) {
                        if (typeof data.error === 'string') {
                            errMsg = data.error;
                        }
                        else {
                            errMsg = JSON.stringify(data.error);
                        }
                    }
                    else {
                        errMsg = JSON.stringify(data);
                    }
                }
                logger.error("".concat(errLog, ". Error=").concat(errMsg));
                throw new common_1.HttpException(errMsg, common_1.HttpStatus.BAD_REQUEST);
            });
        });
    };
    BlockchainService = __decorate([
        (0, common_1.Injectable)(),
        __param(2, (0, typeorm_1.InjectRepository)(CurrencyConfig_entity_1.CurrencyConfig))
    ], BlockchainService);
    return BlockchainService;
}());
exports.BlockchainService = BlockchainService;
