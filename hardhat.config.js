require("@nomicfoundation/hardhat-toolbox");
module.exports = {
  solidity: "0.8.20",
  networks: {
    litvm_testnet: { url: "https://rpc.litvm.com", accounts: [] }
  }
};
