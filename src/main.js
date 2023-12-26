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
exports.writeSwaggerJson = void 0;
require('dotenv').config();
var core_1 = require("@nestjs/core");
var swagger_1 = require("@nestjs/swagger");
var app_module_1 = require("./app.module");
var app_worker_module_1 = require("./app-worker.module");
var logger_1 = require("./shared/logger");
var fs = require("fs");
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var http = require("http");
var bodyParser = require("body-parser");
var express = require('express');
function bootstrap() {
    return __awaiter(this, void 0, void 0, function () {
        var app, server, options, document_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = null;
                    if (!(process.env.NODE_ENV === 'dev-worker' || process.env.NODE_ENV === 'prod-worker')) return [3 /*break*/, 2];
                    return [4 /*yield*/, core_1.NestFactory.create(app_worker_module_1.AppWorkerModule)];
                case 1:
                    app = _a.sent();
                    app.use(logger_1.logger);
                    app.enableCors();
                    app.useGlobalPipes(new common_1.ValidationPipe());
                    (0, logger_1.debugLog)("Worker is running");
                    return [3 /*break*/, 5];
                case 2:
                    if (process.env.NODE_ENV !== 'dev-api' && process.env.NODE_ENV !== 'prod-api') {
                        (0, logger_1.debugLog)("NODE_ENV set to dev-api");
                    }
                    server = express();
                    return [4 /*yield*/, core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server))];
                case 3:
                    app = _a.sent();
                    options = new swagger_1.DocumentBuilder()
                        .setTitle('Launchpad APIs')
                        .setDescription('Launchpad APIs')
                        .setVersion('1.0')
                        .addBearerAuth({
                        description: 'Bearer *token*',
                        type: 'apiKey',
                        name: 'Authorization',
                        "in": 'header'
                    }, 'JWT')
                        .addSecurityRequirements('JWT')
                        .build();
                    if (process.env.NODE_ENV !== 'prod-api') {
                        document_1 = swagger_1.SwaggerModule.createDocument(app, options);
                        (0, exports.writeSwaggerJson)("".concat(process.cwd()), document_1);
                        swagger_1.SwaggerModule.setup('docs', app, document_1);
                    }
                    app.use(bodyParser.json({ limit: '10mb' }));
                    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
                    app.use(logger_1.logger);
                    app.enableCors({
                        origin: true,
                        methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
                        credentials: true
                    });
                    app.useGlobalPipes(new common_1.ValidationPipe());
                    return [4 /*yield*/, app.init()];
                case 4:
                    _a.sent();
                    // const privateKey = fs.readFileSync('sslcert/server.key', 'utf8');
                    // const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
                    // const httpsOptions = { key: privateKey, cert: certificate };
                    http.createServer(server).listen(process.env.PORT || 3000);
                    // https.createServer(httpsOptions, server).listen(process.env.HTTPS_PORT || 443);
                    (0, logger_1.debugLog)("Application is running on: ".concat(process.env.PORT || 3000, " and ").concat(process.env.HTTPS_PORT || 443));
                    _a.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
}
bootstrap();
var writeSwaggerJson = function (path, document) {
    fs.writeFileSync("".concat(path, "/swagger.json"), JSON.stringify(document, null, 2), { encoding: 'utf8' });
};
exports.writeSwaggerJson = writeSwaggerJson;
