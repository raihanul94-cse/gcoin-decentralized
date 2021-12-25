const EC= require('elliptic').ec;
const ec = EC('secp256k1');

const key = ec.genKeyPair();
const public_key = key.getPublic('hex');
const private_key = key.getPrivate('hex');

console.log();
console.log('Private Key: ', private_key);

console.log();
console.log('Public Key: ', public_key);