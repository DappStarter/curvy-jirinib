require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture stove cruise situate column harvest bag army genius'; 
let testAccounts = [
"0xed8399f55963cef290cb8ca9e7001bc7c69e45ea6ec2d53c7f2b51ca77114135",
"0xb4554384ba78867dafe075d13a4d3e779813a71dd060fa06be59c10f1bb1a978",
"0xe6e7321cd8fbf9167dee774dd2641ed7c1f09e6115a41913a14bf3e575c3d439",
"0x3335195cabb5587df9cad6adeef85ca42ab8743afc5e152a8e65d57a5b469165",
"0x9deea49681fb1aa5d47500f20bba41786a2a00b6a030d1a393294d033d06c507",
"0xb0acc3eb89830b8784a918fb26a28bf90c5e5003964d688e60e45aa04f70f0c3",
"0xfbb471d695e92128ee47204dc4efdde318903c8dfa233056bb03f8e33883382a",
"0xf8f36283c2e00590b57fe00c1ac6f7c51cc054bcb4571d5fd9d486f4b1417f85",
"0xebb8dcbf247a1b8b61024b0b7b9df7d66df8dfe3751fbbc8e41ff4088790c06e",
"0xf45615d354432d39a70d2e0e3712a5d25340974bd4bd03d386a49fb1af0477be"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
