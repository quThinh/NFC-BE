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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.errorLog = exports.debugLog = exports.logger = exports.getLogger = void 0;
var winston = require("winston");
var util = require("util");
// import EnvConfigRegistry from './registries/EnvConfigRegistry';
// import { Utils } from '..';
var ERROR_STASHES = [];
var ERROR_SENDING_INTERVAL;
if (process.env.ERROR_SENDING_INTERVAL) {
    ERROR_SENDING_INTERVAL = parseInt(process.env.ERROR_SENDING_INTERVAL, 10);
}
// Default interval is 15 minutes
if (!ERROR_SENDING_INTERVAL || isNaN(ERROR_SENDING_INTERVAL)) {
    ERROR_SENDING_INTERVAL = 15 * 60 * 1000;
}
// setInterval(notifyErrors, ERROR_SENDING_INTERVAL);
var enumerateErrorFormat = winston.format(function (info) {
    if (info instanceof Error) {
        return Object.assign({
            message: info.message,
            stack: info.stack
        }, info);
    }
    return info;
});
function getLogger(name) {
    var has = winston.loggers.has(name);
    if (!has) {
        var transports = [];
        transports.push(new winston.transports.Console({
            format: winston.format.combine(winston.format.colorize(), winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.printf(function (info) {
                var timestamp = info.timestamp, level = info.level, message = info.message, extra = __rest(info, ["timestamp", "level", "message"]);
                return "".concat(timestamp, " [").concat(name, "][").concat(level, "]: ").concat(message, " ").concat(Object.keys(extra).length ? util.inspect(extra) : '');
            })),
            stderrLevels: ['error']
        }));
        winston.loggers.add(name, {
            level: process.env.LOG_LEVEL || 'debug',
            format: winston.format.combine(enumerateErrorFormat()),
            transports: transports
        });
    }
    // return winston.loggers.get(name);
    return {
        debug: function (msg) {
            return winston.loggers.get(name).debug(msg);
        },
        info: function (msg) {
            return winston.loggers.get(name).info(msg);
        },
        warn: function (msg) {
            return winston.loggers.get(name).warn(msg);
        },
        error: function (msg) {
            ERROR_STASHES.push("[ERROR] ".concat(msg));
            return winston.loggers.get(name).error(msg);
        },
        fatal: function (msg) {
            // Setup error
            ERROR_STASHES.push("[ERROR] ".concat(msg));
            return winston.loggers.get(name).error(msg);
        },
        notifyErrorsImmediately: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        // await notifyErrors();
                    }
                    catch (err) {
                        console.error("======= UNCAUGHT ERROR NOTIFYING BEGIN =======");
                        console.error(err);
                        console.error("======= UNCAUGHT ERROR NOTIFYING END =======");
                    }
                    return [2 /*return*/];
                });
            });
        }
    };
}
exports.getLogger = getLogger;
// async function notifyErrors() {
//   if (!ERROR_STASHES.length) {
//     return;
//   }
//   const messages = _.uniq(ERROR_STASHES);
//   ERROR_STASHES = [];
//   let mailReceiver = EnvConfigRegistry.getCustomEnvConfig('MAIL_RECEIVER');
//   // Fallback to old env config
//   if (!mailReceiver) {
//     mailReceiver = EnvConfigRegistry.getCustomEnvConfig('MAILER_RECEIVER');
//   }
//   const appName: string = process.env.APP_NAME || 'Exchange Wallet';
//   const env: string = process.env.NODE_ENV || 'development';
//   const subject = `[${appName}][${env}] Error Notifier`;
//   Utils.sendMail(mailReceiver, subject, `${messages.join('<br />')}`);
// }
function logger(req, res, next) {
    var log = getLogger('BaseLogger');
    log.debug("".concat(req.method, " ").concat(req.url));
    next();
}
exports.logger = logger;
function debugLog(log) {
    // TODO: implement me
    console.log(log);
}
exports.debugLog = debugLog;
function errorLog(log) {
    // TODO: implement me
    console.error(log);
}
exports.errorLog = errorLog;
