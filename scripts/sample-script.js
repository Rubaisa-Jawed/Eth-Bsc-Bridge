// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);

  // const tokenEth = await TokenEth.deploy();
  // await tokenEth.deployed();
  // console.log("TokenEth deployed to:", tokenEth.address);

  // const bridgeEth = await BridgeEth.deploy(tokenEth.address);
  // await bridgeEth.deployed();
  // console.log("BridgeEth deployed to:", bridgeEth.address);

  // await tokenEth.mint(a1.address, ethers.utils.parseUnits("10000" , "ether"));
  // await tokenEth.updateAdmin(bridgeEth.address);

  // const tokenBsc = await TokenBsc.deploy();
  // await tokenBsc.deployed();
  // console.log("TokenBsc deployed to:", tokenBsc.address);

  // const bridgeBsc = await BridgeBsc.deploy(tokenBsc.address);
  // await bridgeBsc.deployed();
  // console.log("BridgeBsc deployed to:", bridgeBsc.address);

  // await tokenBsc.updateAdmin(bridgeBsc.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
