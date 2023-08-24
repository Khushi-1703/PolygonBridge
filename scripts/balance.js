const hre = require("hardhat");
const rinftContractJSON = require("../artifacts/contracts/RiyaNFT.sol/RiNFT.json");


const contract_address = "0xfE2c6BF89E0962c137A5814f372ceB184eA5B8ea"; 
const rinftABI = rinftContractJSON.abi;
const walletAddress = "0x6B43fB1Dbd13C0763C4BC9062a2047C48eC56e65";

async function main() {
	const rinftContract = await hre.ethers.getContractAt(rinftABI, contract_address);

    console.log("You now have: " + (await rinftContract.balanceOf(walletAddress)).toString() + " Polygon tokens");
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});