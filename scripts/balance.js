const hre = require("hardhat");
const rinftContractJSON = require("../artifacts/contracts/RiyaNFT.sol/RiNFT.json");


const contract_address = "0xfE2c6BF89E0962c137A5814f372ceB184eA5B8ea"; 
const rinftABI = rinftContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be";

async function main() {
	const rinftContract = await hre.ethers.getContractAt(rinftABI, contract_address);

    console.log("You now have: " + (await rinftContract.balanceOf(walletAddress)).toString() + " Polygon tokens");
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});