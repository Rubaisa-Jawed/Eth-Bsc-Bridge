require('dotenv').config();
const { sign } = require('crypto');
const hre = require("hardhat");
const ethers = hre.ethers;

const MNEMONIC = process.env.MNEMONIC;
const privateKey = process.env.RINKEBY_PRIVATE_KEY;

async function bridge(from, to, amount, nonce, signature) {
    const bscProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-2-s3.binance.org:8545');
    // const wallet = ethers.Wallet.fromMnemonic(MNEMONIC);
    const wallet = new ethers.Wallet(privateKey);

    const signer = wallet.connect(bscProvider);

    const BridgeBsc = await ethers.getContractFactory("BridgeBsc", signer);
    const BridgeBscAddress = "0x3c917482c551e05C2b5057F9Aa80A7489139d85d";
    const bridgeBsc = new ethers.Contract(BridgeBscAddress, BridgeBsc.interface, signer);

    try {
      const tx = await bridgeBsc.mint(from, to, amount, nonce, signature,{
        gasPrice : ethers.utils.parseUnits("10", "gwei"),
        gasLimit : 1000000
      });
      const hash = await tx.wait();
      console.log('Transaction Hash: ', hash.transactionHash);
    }
    catch (error) {
      console.log(error);
    }
}

async function main() {
  [a1] = await ethers.getSigners();
  const BridgeEth = await ethers.getContractFactory('BridgeEth');
  const BridgeEthAddress = "0x0cD84Ed174f1d16f67a9BcF926c41eb6Ff59349d";
  const bridgeEth = new ethers.Contract(BridgeEthAddress, BridgeEth.interface, a1);
  
  // await bridge("0x621812bf225d4a7bf6e2bca6eba63ce957e3cde9", "0x621812bF225D4A7bF6e2bCA6eBa63Ce957E3cDe9", ethers.utils.parseUnits("100" , "ether"),
  //   2, "0xc6dc5c45231ffc3c62abddbcc9c26ddd571c79e61254a5055537d2bce021672d1396c7fcd36de3fac99d708194b9cc46ee74be24455b12ef4f52eb4c27d9ada51c");


  bridgeEth.on('Transfer', async (from, to, amount, date, nonce, signature, step) => {
    console.log("Listening");
    await bridge(from, to, amount, nonce, signature);
  });
}

main()
  // .then(() => process.exit(0))
  // .catch((error) => {
  //   console.error(error);
  //   process.exit(1);
  // });
