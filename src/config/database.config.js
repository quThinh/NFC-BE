"use strict";
exports.__esModule = true;
exports.databaseConfig = void 0;
var entities_1 = require("../database/entities");
var RoundLog_entity_1 = require("../../../../../../../../src/database/entities/RoundLog.entity");
var RoundOnchain_entity_1 = require("../../../../../../../../src/database/entities/RoundOnchain.entity");
var PlayLog_entity_1 = require("../../../../../../../../src/database/entities/PlayLog.entity");
var Payment_entity_1 = require("../../../../../../../../src/database/entities/Payment.entity");
var PowerPoolConfig_entity_1 = require("../../../../../../../../src/database/entities/PowerPoolConfig.entity");
var LotteryConfig_entity_1 = require("../../../../../../../../src/database/entities/LotteryConfig.entity");
var WrongToken_entity_1 = require("../../../../../../../../src/database/entities/WrongToken.entity");
var Lottery_entity_1 = require("../../../../../../../../src/database/entities/Lottery.entity");
var LotteryClaim_entity_1 = require("../../../../../../../../src/database/entities/LotteryClaim.entity");
var Ticket_entity_1 = require("../../../../../../../../src/database/entities/Ticket.entity");
var LotteryPurchase_entity_1 = require("../../../../../../../../src/database/entities/LotteryPurchase.entity");
exports.databaseConfig = {
    type: (process.env.TYPEORM_CONNECTION || 'mysql'),
    host: process.env.TYPEORM_HOST || 'localhost',
    port: parseInt(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [
        entities_1.Address,
        entities_1.CurrencyConfig,
        entities_1.Transaction,
        entities_1.MailJob,
        entities_1.MailLog,
        entities_1.User,
        entities_1.Admin,
        entities_1.LatestBlock,
        entities_1.Config,
        RoundLog_entity_1.RoundLog,
        RoundOnchain_entity_1.RoundOnchain,
        PlayLog_entity_1.PlayLog,
        Payment_entity_1.Payment,
        PowerPoolConfig_entity_1.PowerPoolConfig,
        LotteryConfig_entity_1.LotteryConfig,
        WrongToken_entity_1.WrongToken,
        Lottery_entity_1.LotteryOnChain,
        LotteryClaim_entity_1.LotteryClaim,
        LotteryPurchase_entity_1.LotteryPurchases,
        Ticket_entity_1.Ticket
    ],
    synchronize: true
};
