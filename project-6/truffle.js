const HDWalletProvider = require('truffle-hdwallet-provider');

const mnemonic = "<METAMASK_MNEMONIC>";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, "<INFURA_ENDPOINT>"),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 20000
  },
};