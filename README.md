## Description

Backend base repository.

## Installation

```bash
$ npm install
```

## Setup
1. Create .env file using env.example

```bash
PORT=3000 # API port

NODE_ENV=dev-worker # dev-api, dev-worker, prod-api, prod-worker

SECRET_KEY=secret-key # your secret key, anything is ok

# notification
MAIL_HOST=gmail.com
MAIL_USER= # gmail account
MAIL_PASS= # gmail application key
MAIL_RECEIVED_ADDRESS= # email address that you want to receive the notification

# TYPEORM
TYPEORM_CONNECTION=mysql
TYPEORM_HOST=localhost # MySQL host
TYPEORM_PORT=3306 # MySQL port
TYPEORM_USERNAME=root # MySQL username
TYPEORM_PASSWORD=1 # MySQL password
TYPEORM_DATABASE=database_name # schema name
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_MIGRATIONS=dist/database/migrations/*.js
TYPEORM_ENTITIES_DIR=dist/**/*.entity.js

# BLOCK REQUEST
LIMIT_REQUEST=5
LIMIT_HOURS_BLOCK_REQUEST=4

# CONFIG URL
URL_FRONTEND=
URL_BACKEND=
URL_API=
```

2. Create database structure.

Run the app for the first time to create the database structure.

3. Setup currency config

Insert currency config: `INSERT INTO currency_config (
    swap_id,
    network,
    chain_name,
    chain_id,
    token_address,
    average_block_time,
    required_confirmations,
    temp_required_confirmations,
    scan_api,
    rpc_endpoint,
    explorer_endpoint
) VALUES (
    1,
    'bsctestnet',
    'bsctestnet',
    '97',
    '{"powerpool": "0x7171b6d550149706DDfE03817Fd3fC6D43dfFa84", "randomNumberGenerator": "0xdD932cD676Ae1f57443bF41f3c1d9e8006Abf202", "lottery": "0x1929eeFB80a21596eacD7c96112652A728Ad9D9b", "randomLottery": "0x049d4d433aD593Da6E5ECD541A5E2110EB4C23aB"}',
    3000,
    5,
    0,
    'https://api-testnet.bscscan.com',
    'https://bsc-testnet.blockpi.network/v1/rpc/public',
    'https://testnet.bscscan.com/'
);
`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## License

This project is under [MIT licensed](LICENSE).
