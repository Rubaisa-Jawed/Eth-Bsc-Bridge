const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    [a1] = await ethers.getSigners();
    const TokenBsc = await ethers.getContractFactory('TokenBsc');
    const TokenBscAddress = "0xc75302556Ab3807b80F38D8A627BF8BEEd6508E5";
    const tokenBsc = new ethers.Contract(TokenBscAddress, TokenBsc.interface, a1);
  
    const balance = await tokenBsc.balanceOf(a1.address);
    console.log("Token Balance in BSC Testnet is: ", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
