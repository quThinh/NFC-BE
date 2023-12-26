"use strict";
exports.__esModule = true;
exports.Causes = void 0;
var common_1 = require("@nestjs/common");
var Causes = /** @class */ (function () {
    function Causes() {
    }
    Causes.INTERNAL_ERROR = new common_1.HttpException('Server internal error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    Causes.EMAIL_OR_PASSWORD_INVALID = new common_1.HttpException('Email or Password is invalid', common_1.HttpStatus.UNAUTHORIZED);
    Causes.TWOFA_INVALID = new common_1.HttpException('TwoFactorAuthentication code is invalid', common_1.HttpStatus.UNAUTHORIZED);
    Causes.DUPLICATED_EMAIL_OR_USERNAME = new common_1.HttpException('Email or username was registered', common_1.HttpStatus.CONFLICT);
    Causes.NOT_ACCESS_CREATE_USER = new common_1.HttpException('You cant access create new user', common_1.HttpStatus.CONFLICT);
    Causes.USER_NOT_ACCESS = new common_1.HttpException('You can not access', common_1.HttpStatus.UNAUTHORIZED);
    Causes.IPAGINATION_OPTIONS_INVALID = new common_1.HttpException('Page and limit have to greater than 0.', common_1.HttpStatus.BAD_REQUEST);
    Causes.QUERY_OPTIONS_INVALID = new common_1.HttpException('Query options is not valid', common_1.HttpStatus.BAD_REQUEST);
    Causes.CURRENCY_INVALID = new common_1.HttpException('Currency is not valid in system', common_1.HttpStatus.BAD_REQUEST);
    Causes.DATA_INVALID = new common_1.HttpException('Data is not valid in system', common_1.HttpStatus.BAD_REQUEST);
    Causes.CURRENCY_INIT_FAIL = new common_1.HttpException('Currency init process was failed', common_1.HttpStatus.BAD_REQUEST);
    Causes.INVALID_SIGNATURE_WALLET = new common_1.HttpException(['Signature is not valid'], common_1.HttpStatus.CONFLICT);
    Causes.USER_ERROR = new common_1.HttpException(["User does not exist or User has been't activated"], common_1.HttpStatus.BAD_REQUEST);
    /**
     * address
     */
    Causes.ADDRESS_NOT_FOUND = new common_1.HttpException('Address not found', common_1.HttpStatus.NOT_FOUND);
    Causes.ADDRESS_NOT_BELONG_TO_WALLET = new common_1.HttpException('Address does not belong to wallet', common_1.HttpStatus.BAD_REQUEST);
    Causes.CREATE_ADDRESS_FAILED = new common_1.HttpException('Create address failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    Causes.ENCRYPT_PRIVATE_KEY_ERROR = new common_1.HttpException('Encrypted private key invalid', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    Causes.ADDRESS_INSIDE_SYSTEM = new common_1.HttpException('Address is inside the system', common_1.HttpStatus.BAD_REQUEST);
    Causes.ADDRESS_INVALID = new common_1.HttpException('Address invalid', common_1.HttpStatus.BAD_REQUEST);
    Causes.ADDRESS_NEED_MEMO = new common_1.HttpException('Memo is required for the address', common_1.HttpStatus.BAD_REQUEST);
    /**
     * wallet
     */
    Causes.WALLET_NOT_FOUND = new common_1.HttpException('Wallet not found', common_1.HttpStatus.NOT_FOUND);
    Causes.MISMATCH_WALLET_COIN_TYPE = new common_1.HttpException('msg_coin_type_incorrect', common_1.HttpStatus.BAD_REQUEST);
    Causes.WALLET_WITH_CURRENCY_EXISTED = new common_1.HttpException('Wallet with currency existed', common_1.HttpStatus.BAD_REQUEST);
    Causes.WALLET_WITH_CURRENCY_NOT_CREATED = new common_1.HttpException('Wallet with currency was not created', common_1.HttpStatus.BAD_REQUEST);
    /**
     * powerpool
     */
    Causes.POWER_POOL_CONFIG_NOT_FOUND = new common_1.HttpException('PowerPool config not found', common_1.HttpStatus.NOT_FOUND);
    Causes.MISSING_EPOCH_NUMBER = new common_1.HttpException('Missing epoch number', common_1.HttpStatus.BAD_REQUEST);
    Causes.MISSING_PLAY_ID = new common_1.HttpException('Missing play id', common_1.HttpStatus.BAD_REQUEST);
    Causes.ROUND_NOT_FOUND = new common_1.HttpException('Round not found', common_1.HttpStatus.NOT_FOUND);
    Causes.PLAY_NOT_FOUND = new common_1.HttpException('Play not found', common_1.HttpStatus.NOT_FOUND);
    /**
     * lottery
     */
    Causes.LOTTERY_CONFIG_NOT_FOUND = new common_1.HttpException('lottery config not found', common_1.HttpStatus.NOT_FOUND);
    Causes.MISSING_LOTTERY_ID = new common_1.HttpException('Missing lottery id', common_1.HttpStatus.BAD_REQUEST);
    Causes.MISSING_LOTTERY_PURCHASE_ID = new common_1.HttpException('Missing lottery purchase id', common_1.HttpStatus.BAD_REQUEST);
    Causes.MISSING_TICKET_ID = new common_1.HttpException('Missing ticket id', common_1.HttpStatus.BAD_REQUEST);
    Causes.LOTTERY_NOT_FOUND = new common_1.HttpException('Lottery not found', common_1.HttpStatus.NOT_FOUND);
    Causes.TICKET_NOT_FOUND = new common_1.HttpException('Ticket not found', common_1.HttpStatus.NOT_FOUND);
    Causes.LOTTERY_PURCHASE_NOT_FOUND = new common_1.HttpException('Lottery purchase not found', common_1.HttpStatus.NOT_FOUND);
    /**
     * hot wallet
     */
    Causes.HOT_WALLET_NOT_FOUND = new common_1.HttpException('Hot wallet not found', common_1.HttpStatus.NOT_FOUND);
    Causes.HOT_WALLET_EXISTED = new common_1.HttpException('Hot wallet of user existed', common_1.HttpStatus.BAD_REQUEST);
    Causes.HOT_WALLET_TYPE_INVALID = new common_1.HttpException('Hot wallet type is not invalid', common_1.HttpStatus.BAD_REQUEST);
    Causes.LOWER_THRESHOLD_MUST_BE_GREATER_THAN_0 = new common_1.HttpException('Lower threshold must be greater than 0', common_1.HttpStatus.BAD_REQUEST);
    Causes.LOWER_THRESHOLD_MUST_BE_LESS_THAN_UPPER_MIDDLE = new common_1.HttpException('Lower threshold must be less than upper threshold and middle threshold', common_1.HttpStatus.BAD_REQUEST);
    Causes.MIDDLE_THRESHOLD_MUST_BE_LESS_THAN_UPPER = new common_1.HttpException('Middle threshold must be less than upper threshold', common_1.HttpStatus.BAD_REQUEST);
    /**
     * kms
     **/
    Causes.KMS_DATA_KEY_NOT_FOUND = new common_1.HttpException('msg_kms_data_key_not_found', common_1.HttpStatus.NOT_FOUND);
    Causes.KMS_CMK_NOT_FOUND = new common_1.HttpException('msg_kms_cmk_not_found', common_1.HttpStatus.NOT_FOUND);
    Causes.KMS_CMK_INVALID = new common_1.HttpException('msg_kms_cmk_invalid', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    Causes.ONLY_SUPPORT_STRING = new common_1.HttpException('msg_only_support_encrypt_string', common_1.HttpStatus.BAD_REQUEST);
    /**
     * blockchain
     */
    Causes.GET_BALANCE_FAIL = new common_1.HttpException('Get balance fail', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    /**
     * deposit
     */
    Causes.DEPOSIT_AMOUNT_GREATER_THAN_BALANCE = new common_1.HttpException('Deposit amount is greater than address balance', common_1.HttpStatus.BAD_REQUEST);
    Causes.DEPOSIT_NOT_FOUND = new common_1.HttpException('Deposit not found', common_1.HttpStatus.NOT_FOUND);
    Causes.LOCAL_TX_NOT_INSERTED_AFTER_COLLECTING = new common_1.HttpException('Local tx not inserted after collecting', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    /**
     * withdrawals
     */
    Causes.WITHDRAW_FROM_INTERNAL_ADDRESS = new common_1.HttpException('Cannot withdraw to an address inside the system', common_1.HttpStatus.BAD_REQUEST);
    Causes.WALLET_BALANCE_NOT_FOUND_COIN = new common_1.HttpException('Wallet balance not found, hot wallet need platform coin to send token.', common_1.HttpStatus.NOT_FOUND);
    Causes.WITHDRAWAL_AMOUNT_MUST_GREATER_THAN_ZERO = new common_1.HttpException('Withdrawal amount must greater than 0', common_1.HttpStatus.BAD_REQUEST);
    /**
     * webhook
     **/
    Causes.WEBHOOK_NOT_FOUND = new common_1.HttpException('Webhook not found.', common_1.HttpStatus.NOT_FOUND);
    Causes.WEBHOOK_ALREADY_EXIST = new common_1.HttpException('Webhook already exist.', common_1.HttpStatus.BAD_REQUEST);
    return Causes;
}());
exports.Causes = Causes;
