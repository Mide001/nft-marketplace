require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers");
require("dotenv").config()
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
 // unused configuration commented out for now
  ropsten: {
      url: "https://ropsten.infura.io/v3/{project_id}",
      account: [privateKey]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}