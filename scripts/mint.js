const hre = require("hardhat");
const fs = require("fs");
const { encryptDataField, decryptNodeResponse } = require("@swisstronik/utils");

const sendShieldedTransaction = async (signer, destination, data, value) => {
    try {
        const rpcLink = hre.network.config.url;
        const [encryptedData] = await encryptDataField(rpcLink, data);
        return await signer.sendTransaction({
            from: signer.address,
            to: destination,
            data: encryptedData,
            value,
        });
    } catch (error) {
        console.error("Error sending shielded transaction:", error);
        throw error;
    }
};

const loadContractAddress = () => {
    try {
        return fs.readFileSync("contract.txt", "utf8").trim();
    } catch (error) {
        console.error("Error reading contract address from file:", error);
        throw error;
    }
};

const getContractInstance = async (address) => {
    try {
        const contractFactory = await hre.ethers.getContractFactory("Token");
        return contractFactory.attach(address);
    } catch (error) {
        console.error("Error getting contract instance:", error);
        throw error;
    }
};

const mintNFT = async (signer, contract, contractAddress) => {
    try {
        const functionName = "safeMint";
        const data = contract.interface.encodeFunctionData(functionName, [signer.address, 1]);
        const safeMintTx = await sendShieldedTransaction(signer, contractAddress, data, 0);
        await safeMintTx.wait();
        console.log("Mint NFT Success!\nTransaction hash: ", `https://explorer-evm.testnet.swisstronik.com/tx/${safeMintTx.hash}`);
    } catch (error) {
        console.error("Error minting NFT:", error);
        throw error;
    }
};

async function main() {
    const contractAddress = loadContractAddress();
    const [signer] = await hre.ethers.getSigners();
    const contract = await getContractInstance(contractAddress);
    await mintNFT(signer, contract, contractAddress);
}

main().catch((error) => {
    console.error("Unexpected error:", error);
    process.exitCode = 1;
});
