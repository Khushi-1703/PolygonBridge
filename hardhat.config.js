require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["25db8a4bf5ce537e05bdfa24f844621206fd8be9a2d7ec6876496989e522e3a4"],
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/nyHyzW8RbkwSKnszaYmdcV-UAjmRa9AH',
      accounts: ["25db8a4bf5ce537e05bdfa24f844621206fd8be9a2d7ec6876496989e522e3a4"],
      gasPrice: 100
    },
  },
};