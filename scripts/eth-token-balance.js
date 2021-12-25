const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    [a1] = await ethers.getSigners();
    const TokenEth = await ethers.getContractFactory('TokenEth');
    const TokenEthAddress = "0xD83a51daC0975CD13fE9590326c54E65A41adBAe";
    const tokenEth = new ethers.Contract(TokenEthAddress, TokenEth.interface, a1);
  
    const balance = await tokenEth.balanceOf(a1.address);
    console.log("Token Balance in Rinkeby is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
