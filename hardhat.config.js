/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("dotenv").config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/df83cb3a19784352b20bd8ab641254da`,
      accounts: [
        `0xc1acac07e4367a5928560fab530122602bb2cd177a6fa34d3c2fcf63a5d82e02`,
      ],
    },
  },
};
