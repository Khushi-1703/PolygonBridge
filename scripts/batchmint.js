const hre = require("hardhat");
const rinftContractJSON = require("../artifacts/contracts/RiyaNFT.sol/RiNFT.json");

const contract_address = "0xE92FA36277334a667F0Dc0c297A391b5ec5914B8"; // Replace with your RiNFT contract address
const rinftABI = rinftContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

async function main() {
    const rinftContract = await hre.ethers.getContractAt(rinftABI, contract_address);

    let mintedtoken = 0

    for (let i = 0; i < 5; i++) {
        try {
            const tx = await rinftContract.mintRNFTToken(walletAddress);
            await tx.wait();

            mintedtoken++;
            
        } catch (error) {
            console.error("Error minting token:", error.message);
        }
    }

    console.log("Token Minted:", mintedtoken);
    console.log("You now have: " + (await rinftContract.balanceOf(walletAddress)).toString() + " tokens");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
