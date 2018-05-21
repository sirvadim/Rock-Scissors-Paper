require('babel-register');
require('babel-polyfill');
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "grant milk cable dial sword cable pool coil aisle slam meat silk";

// module.exports = {
//   networks: {
//     development: {
//       host: "localhost",
//       port: 7545,
//       network_id: 5777 // Match any network id
//     },
//     ropsten: {
//         provider: function() {
//           return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/jpzl7JZnoS8BsVAkn2oa")
//         },
//         network_id: 3,
//         gas: 4500000,
//         gasPrice: 22000000000
//     }
//   },
//   solc: {
//     optimizer: {
//       enabled: true,
//       runs: 200
//     }
//   }
// };

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: 5777
    }
  }
};