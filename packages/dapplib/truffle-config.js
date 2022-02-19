require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remain umbrella inner arch swift genuine'; 
let testAccounts = [
"0x1083da3cb11d3f85b2afc45f3ab135f9dbfd9562688308c30a4c03df3ca52c16",
"0x72bd59c9b951a4318bc5630d702a359ccee17a743282a43752066bb3eded3add",
"0x35c35f2346f8be1351b32e023826d036aaa9c2b9acceaa5f06fa8612fd314107",
"0xc188857dbc8c90949caa57f624526be6b95782895a97b9a50beaf050d1c92b16",
"0xf332126805a2d877092c7018232d5c134c1b07330282a2fa58693fd93eb4faa1",
"0x4e5caba6e8bbec0ac387702c40e49ab77cba7797b354ab2b6ef3d8256d2baff2",
"0xe5d77e5d7e399ea541961cdd1fdff8916b0f7a6486bf759bfbb2d08601105187",
"0xd518e27c6218b592e69e065963228233bb7eb8ac1f935dcedba2f242625be0f3",
"0x985af610b1c230b2f8239234c8bcd70dc9c4d0e28af2a678bc8a04a9d1d4f524",
"0xfb5afb8d9209d11a7c0c0cd6d3edfa955c7f27445e9eb58cd0155cd26749f615"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


