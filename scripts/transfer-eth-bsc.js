const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const [a1] = await ethers.getSigners();
  const BridgeEth = await ethers.getContractFactory('BridgeEth');
  const BridgeEthAddress = "0x0cD84Ed174f1d16f67a9BcF926c41eb6Ff59349d";
  const bridgeEth = new ethers.Contract(BridgeEthAddress, BridgeEth.interface, a1);
  
  const amount = ethers.utils.parseUnits("100" , "ether");
  const nonce = (await bridgeEth.maxProcessedNonce(a1.address)).add(1);

  const message = ethers.utils.solidityKeccak256(
    ['address', 'address', 'uint256', 'uint256'],
    [a1.address, a1.address, amount, nonce]
  );
  
  // ethers.utils.arrayify() used to pass the binary 32 bytes of data
  const signature = await a1.signMessage(ethers.utils.arrayify(message));

  const tx = await bridgeEth.burn(a1.address, amount, nonce, signature);
  console.log(tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
