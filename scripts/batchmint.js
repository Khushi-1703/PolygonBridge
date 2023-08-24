const hre = require("hardhat");
const rinftContractJSON = require("../artifacts/contracts/RiyaNFT.sol/RiNFT.json");

const contract_address = "0x54f1181518FFf69EDc578690E7523b380B49914D"; // Replace with your RiNFT contract address
const rinftABI = rinftContractJSON.abi;
const walletAddress = "0x6B43fB1Dbd13C0763C4BC9062a2047C48eC56e65"; // Replace with your wallet address

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
