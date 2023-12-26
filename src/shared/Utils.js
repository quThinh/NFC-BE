"use strict";
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
exports.getArrayPaginationBuildTotal = exports.snakeToCamel = exports.getOffset = exports.existValueInEnum = exports.convertToObject = exports.convertToString = exports.encrypt = exports.checkIPaginationOptions = exports.addHttps = exports.nowInSeconds = exports.now = exports.getBlockNumber = exports.nowInMillis = void 0;
var nestjs_typeorm_paginate_1 = require("nestjs-typeorm-paginate");
var CryptoJS = require("crypto-js");
var NodeCache = require("node-cache");
var nodeCache = new NodeCache({ stdTTL: 2, checkperiod: 2 });
function nowInMillis() {
    return Date.now();
}
exports.nowInMillis = nowInMillis;
function web3Cache(key, func) {
    return __awaiter(this, void 0, void 0, function () {
        var value;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = nodeCache.get(key);
                    if (!(value == undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, func];
                case 1:
                    // handle miss!
                    value = _a.sent();
                    nodeCache.set(key, value);
                    return [2 /*return*/, value];
                case 2: return [2 /*return*/, value];
            }
        });
    });
}
function getBlockNumber(chainId, web3) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, web3Cache("".concat(chainId, ": getBlockNumber"), web3.eth.getBlockNumber())];
        });
    });
}
exports.getBlockNumber = getBlockNumber;
// Alias for nowInMillis
function now() {
    return nowInMillis();
}
exports.now = now;
function nowInSeconds() {
    return (nowInMillis() / 1000) | 0;
}
exports.nowInSeconds = nowInSeconds;
function addHttps(url) {
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = 'https://' + url;
    }
    return url;
}
exports.addHttps = addHttps;
function checkIPaginationOptions(options) {
    if (options.limit == 0 || options.page == 0) {
        return false;
    }
    return true;
}
exports.checkIPaginationOptions = checkIPaginationOptions;
function encrypt(data) {
    return CryptoJS.MD5(data).toString();
}
exports.encrypt = encrypt;
function convertToString(value) {
    return (typeof value === 'string') ? value : '';
}
exports.convertToString = convertToString;
function convertToObject(value) {
    return (typeof value === 'object') ? value : {};
}
exports.convertToObject = convertToObject;
function existValueInEnum(type, value) {
    return (Object.keys(type)
        .filter(function (k) { return isNaN(Number(k)); })
        .filter(function (k) { return type[k] === value; }).length > 0);
}
exports.existValueInEnum = existValueInEnum;
function getOffset(paginationOptions) {
    var offset = 0;
    if (paginationOptions.page && paginationOptions.limit) {
        if (paginationOptions.page > 0) {
            offset =
                (Number(paginationOptions.page) - 1) * Number(paginationOptions.limit);
        }
    }
    return offset;
}
exports.getOffset = getOffset;
function snakeToCamel(obj) {
    if (Array.isArray(obj)) {
        return obj.map(function (val) { return snakeToCamel(val); });
    }
    else if (obj !== null && typeof obj === "object") {
        return Object.keys(obj).reduce(function (result, key) {
            var newKey = key.replace(/_([a-z])/g, function (m, p1) { return p1.toUpperCase(); });
            result[newKey] = snakeToCamel(obj[key]);
            return result;
        }, {});
    }
    return obj;
}
exports.snakeToCamel = snakeToCamel;
function getArrayPaginationBuildTotal(totalItems, totalData, options) {
    var limit = options.limit, page = options.page;
    var selectedItems = totalItems;
    var totalRecord = 0;
    if (totalData.length > 0) {
        totalRecord = totalData[0].Total;
    }
    var pagination = {
        totalItems: Number(totalRecord),
        itemCount: Number(totalRecord),
        itemsPerPage: Number(limit),
        totalPages: Math.ceil(Number(totalRecord) / limit),
        currentPage: Number(page)
    };
    return new nestjs_typeorm_paginate_1.Pagination(selectedItems, pagination, null);
}
exports.getArrayPaginationBuildTotal = getArrayPaginationBuildTotal;
