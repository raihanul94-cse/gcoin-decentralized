const { Blockchain, Transaction } = require('../src/gcoin');
const EC= require('elliptic').ec;
const ec = EC('secp256k1');

const my_key = ec.keyFromPrivate('3f843e8627cdcdf43c32ecb80e0abccb0025643d5297b7c149b60291035c271f');
const my_wallet_address = my_key.getPublic('hex');

const grock = new Blockchain();

const trx1 = new Transaction(my_wallet_address, 'elon-mask-public-key', 10);
trx1.sign_transaction(my_key);
grock.add_transaction(trx1);

console.log('Miner Started Mining....');
grock.mine_pending_transactions(my_wallet_address);

console.log(JSON.stringify(grock, null, 4));
console.log(`Balance of: ${grock.get_balance_of_address(my_wallet_address)}`);


