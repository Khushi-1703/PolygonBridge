const hre = require("hardhat");
const rinftContractJSON = require("../artifacts/contracts/RiyaNFT.sol/RiNFT.json");

const contract_address ="0xE92FA36277334a667F0Dc0c297A391b5ec5914B8"; // Replace with your RiNFT contract address
const rinftABI = rinftContractJSON.abi;
const walletAddress = "0xB48c24e5d5697550593b862C666Ae59e5B5671Be"; // Replace with your wallet address

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // Replace with your fxERC21Root contract address

async function main() {
    const rinftContract = await hre.ethers.getContractAt(rinftABI, contract_address);

    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);

    const approveTx = await rinftContract.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");

    for (let i = 1; i < 6; i++) {
        const depositTx = await fxContract.deposit(contract_address, walletAddress, i, '0x6566');
        await depositTx.wait();
        console.log(`Token ${i} deposited`);
    }

    console.log("Your 5 Tokens deposited successfully to Polygon through fxroot bridging");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
