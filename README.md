# ERC721 Token Creation Project

This project demonstrates how to create and deploy a simple ERC721 (non-fungible token) smart contract using Hardhat, a popular Solidity development framework. The project is deployed on the Swisstronik network.

## Overview

The ERC721 standard is widely used for creating unique digital assets (NFTs). This project sets up a basic ERC721 token with customizable metadata and deployment scripts. You can use this as a starting point for creating your own NFTs or expanding the functionality to suit more complex use cases.

## Features

- ERC721 Standard : Implements the ERC721 standard with minting functionality.
- Custom Metadata : Supports setting token URIs for metadata.
- Deployment : Scripts for deploying the contract to the Swisstronik network.
- Testing : Basic tests for the ERC721 functionality using Hardhat.

## Prerequisites

- Node.js : Ensure you have Node.js installed (>= 14.x).
- npm or yarn : Package manager for installing dependencies.
- Hardhat : A development environment for Ethereum smart contracts.
- Swisstronik Network : Access to the Swisstronik network for deployment.

## Getting Started
Here is the main guide: https://swisstronik.gitbook.io/swisstronik-docs/development/guides/contract-deployment-hardhat/
### 1. Clone the repository

```bash
git clone https://github.com/Leihyn/swissERC721.git 
cd erc721-token-swisstronik
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure the network

In the `hardhat.config.js` file, configure the Swisstronik network settings:

USE A DEMO ACCOUNT; an account you can afford to lose

```javascript
module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "(use swisstronik rpc)",  // Replace with the correct RPC URL in the gitbook
      accounts: ["YOUR_PRIVATE_KEY"],  // Replace with your Swisstronik network private key
    },
  },
};


```

### 4. Compile the contract

```bash
npx hardhat compile
```

### 5. Deploy the contract

```bash
npx hardhat run scripts/deploy.js --network swisstronik
```

### 6. Run tests

```bash
npx hardhat test
```

## Project Structure

- contracts/: Contains the ERC721 smart contract.
- scripts/: Deployment scripts.
- test/: Test files for the ERC721 contract.
- hardhat.config.js: Hardhat configuration file.

## Customization

- Token Name and Symbol: Modify the name and symbol of the token in the ERC721 contract.

## Deployment

After configuring the network and writing your contract, you can deploy it using the deployment script. The script will push the contract to the Swisstronik network, and you'll receive a contract address upon success
