const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying contract...");
  const Contract = await ethers.getContractFactory("Lock");
  const contract = await Contract.deploy();
  await contract.waitForDeployment();
  console.log("Contract deployed to:", await contract.getAddress());
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
