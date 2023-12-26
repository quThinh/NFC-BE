"use strict";
exports.__esModule = true;
exports.SortType = exports.SortBy = exports.HotWalletType = exports.CollectStatus = exports.WalletEvent = exports.WithdrawOutType = exports.PendingWithdrawalStatus = exports.WithdrawalStatus = exports.TransactionType = exports.WEBHOOK_TYPE = exports.RefundStatus = exports.LotteryStatus = exports.OracleState = exports.OnchainStatus = exports.Currency = exports.HotWalletStatus = void 0;
var HotWalletStatus;
(function (HotWalletStatus) {
    HotWalletStatus["COMPLETED"] = "completed";
    HotWalletStatus["FAILED"] = "failed";
})(HotWalletStatus = exports.HotWalletStatus || (exports.HotWalletStatus = {}));
var Currency;
(function (Currency) {
    Currency["BIV"] = "biv";
    Currency["WBIV"] = "wbiv";
    Currency["ETH"] = "eth";
})(Currency = exports.Currency || (exports.Currency = {}));
var OnchainStatus;
(function (OnchainStatus) {
    OnchainStatus["CONFIRMING"] = "confirming";
    OnchainStatus["CONFIRMED"] = "confirmed";
})(OnchainStatus = exports.OnchainStatus || (exports.OnchainStatus = {}));
exports.OracleState = [
    "UNKNOWN",
    "REQUESTED",
    "FILLED",
];
exports.LotteryStatus = [
    "Pending",
    "Open",
    "Close",
    "Claimable",
];
var RefundStatus;
(function (RefundStatus) {
    RefundStatus["WAITING"] = "WAITING";
    RefundStatus["REFUNDABLE"] = "REFUNDABLE";
    RefundStatus["REFUNDED"] = "REFUNDED";
})(RefundStatus = exports.RefundStatus || (exports.RefundStatus = {}));
var WEBHOOK_TYPE;
(function (WEBHOOK_TYPE) {
    WEBHOOK_TYPE["TRANSFER"] = "transfer";
    WEBHOOK_TYPE["TXCHANGED"] = "tx_changed";
    WEBHOOK_TYPE["COMMON"] = "common";
})(WEBHOOK_TYPE = exports.WEBHOOK_TYPE || (exports.WEBHOOK_TYPE = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["DEPOSIT"] = "deposit";
    TransactionType["WITHDRAWAL_NORMAL"] = "withdrawal_normal";
    TransactionType["WITHDRAWAL_COLD"] = "withdrawal_cold";
    TransactionType["SEED"] = "seed";
    TransactionType["COLLECT"] = "collect";
    TransactionType["WITHDRAWAL_COLLECT"] = "withdrawal_collect";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
var WithdrawalStatus;
(function (WithdrawalStatus) {
    WithdrawalStatus["INVALID"] = "invalid";
    WithdrawalStatus["UNSIGNED"] = "unsigned";
    WithdrawalStatus["SIGNING"] = "signing";
    WithdrawalStatus["SIGNED"] = "signed";
    WithdrawalStatus["SENT"] = "sent";
    WithdrawalStatus["COMPLETED"] = "completed";
    WithdrawalStatus["FAILED"] = "failed";
})(WithdrawalStatus = exports.WithdrawalStatus || (exports.WithdrawalStatus = {}));
var PendingWithdrawalStatus;
(function (PendingWithdrawalStatus) {
    PendingWithdrawalStatus["UNSIGNED"] = "unsigned";
    PendingWithdrawalStatus["SIGNING"] = "signing";
    PendingWithdrawalStatus["SIGNED"] = "signed";
    PendingWithdrawalStatus["SENT"] = "sent";
})(PendingWithdrawalStatus = exports.PendingWithdrawalStatus || (exports.PendingWithdrawalStatus = {}));
var WithdrawOutType;
(function (WithdrawOutType) {
    WithdrawOutType["WITHDRAW_OUT_COLD_SUFFIX"] = "_cold_withdrawal";
    WithdrawOutType["WITHDRAW_OUT_NORMAL"] = "normal";
    WithdrawOutType["EXPLICIT_FROM_HOT_WALLET"] = "explicit_from_hot_wallet";
    WithdrawOutType["EXPLICIT_FROM_DEPOSIT_ADDRESS"] = "explicit_from_deposit_address";
    WithdrawOutType["AUTO_COLLECTED_FROM_DEPOSIT_ADDRESS"] = "auto_collected_from_deposit_address";
})(WithdrawOutType = exports.WithdrawOutType || (exports.WithdrawOutType = {}));
var WalletEvent;
(function (WalletEvent) {
    WalletEvent["CREATED"] = "created";
    WalletEvent["DEPOSIT"] = "deposit";
    WalletEvent["WITHDRAW_REQUEST"] = "withdraw_request";
    WalletEvent["WITHDRAW_COMPLETED"] = "withdraw_completed";
    WalletEvent["WITHDRAW_FAILED"] = "withdraw_failed";
    WalletEvent["WITHDRAW_FEE"] = "withdraw_fee";
    WalletEvent["WITHDRAW_ACCEPTED"] = "withdraw_accepted";
    WalletEvent["WITHDRAW_DECLINED"] = "withdraw_declined";
    WalletEvent["COLLECT_FEE"] = "collect_fee";
    WalletEvent["COLLECT_AMOUNT"] = "collect_amount";
    WalletEvent["COLLECTED_FAIL"] = "collected_fail";
    WalletEvent["COLLECTED"] = "collected";
    WalletEvent["SEEDED_FAIL"] = "seeded_fail";
    WalletEvent["SEEDED"] = "seeded";
    WalletEvent["SEED_FEE"] = "seed_fee";
    WalletEvent["SEED_AMOUNT"] = "seed_amount";
})(WalletEvent = exports.WalletEvent || (exports.WalletEvent = {}));
var CollectStatus;
(function (CollectStatus) {
    CollectStatus["UNCOLLECTED"] = "uncollected";
    CollectStatus["COLLECTING_FORWARDING"] = "forwarding";
    CollectStatus["COLLECTING"] = "collecting";
    CollectStatus["COLLECT_SIGNED"] = "collect_signed";
    CollectStatus["COLLECT_SENT"] = "collect_sent";
    CollectStatus["COLLECTED"] = "collected";
    CollectStatus["NOTCOLLECT"] = "notcollect";
    CollectStatus["SEED_REQUESTED"] = "seed_requested";
    CollectStatus["SEEDING"] = "seeding";
    CollectStatus["SEED_SIGNED"] = "seed_signed";
    CollectStatus["SEED_SENT"] = "seed_sent";
    CollectStatus["SEEDED"] = "seeded";
})(CollectStatus = exports.CollectStatus || (exports.CollectStatus = {}));
var HotWalletType;
(function (HotWalletType) {
    HotWalletType["NORMAL"] = "normal";
    HotWalletType["SEED"] = "seed";
})(HotWalletType = exports.HotWalletType || (exports.HotWalletType = {}));
var SortBy;
(function (SortBy) {
    SortBy["UPDATED_AT"] = "updatedAt";
    SortBy["AMOUNT"] = "amount";
})(SortBy = exports.SortBy || (exports.SortBy = {}));
var SortType;
(function (SortType) {
    SortType["SortTypeASC"] = "asc";
    SortType["SortTypeDESC"] = "desc";
})(SortType = exports.SortType || (exports.SortType = {}));
