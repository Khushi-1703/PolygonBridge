# RiNFT Smart Contract

The RiNFT (Randomized NFT) smart contract is an Ethereum ERC-721 non-fungible token contract that allows for the minting of randomized NFTs with associated prompts. This contract inherits functionalities from OpenZeppelin's ERC721 and ERC721URIStorage contracts, and it also includes the Ownable pattern for access control.

## Overview

This smart contract enables the creation and management of randomized NFTs with the following features:

- Minting of NFTs: The owner of the contract can mint new RiNFT tokens to specific addresses.
- Token Prompts: Each RiNFT token can have an associated prompt stored on-chain.
- URI Storage: The contract supports storing token metadata URIs on-chain using the ERC721URIStorage extension.

## Contract Details

### Inherited Contracts

- **ERC721**: This contract inherits the ERC721 standard, which provides the basic functionality for non-fungible tokens.
- **ERC721URIStorage**: This contract also inherits ERC721URIStorage, an extension of ERC721 that enables storing token metadata URIs on-chain.
- **Ownable**: The Ownable contract ensures that only the owner of the contract can perform certain actions, such as minting new tokens.

### Libraries Used

- **Counters**: The contract uses the Counters library from OpenZeppelin to manage token IDs and generate unique token IDs for each minted token.

### Constructor

The contract's constructor initializes the RiNFT with the name "RiNFT" and the symbol "RNFT". It also prepopulates the contract with an array of initial token URIs.

### Functions

- **mintRNFTToken(address to) - public onlyOwner returns (uint256)**: This function allows the contract owner to mint a new RiNFT token and assign it to the provided address. It returns the token ID of the minted token.

- **_setTokenPrompt(uint256 tokenId, string memory prompt) - internal**: This internal function sets a prompt associated with a specific token ID.

- **getTokenPrompt(uint256 tokenId) - public view returns (string memory)**: This function retrieves the prompt associated with a given token ID.

- **_burn(uint256 tokenId) - internal override(ERC721, ERC721URIStorage)**: This internal override function handles the burning (destruction) of tokens. It also deletes the associated prompt for the burned token.

- **tokenURI(uint256 tokenId) - public view override(ERC721, ERC721URIStorage) returns (string memory)**: This public view override function returns the URI of the metadata associated with a token.

- **supportsInterface(bytes4 interfaceId) - public view override(ERC721, ERC721URIStorage) returns (bool)**: This public view override function checks if a specific interface is supported by the contract.

## Usage

1. Deploy the smart contract to an Ethereum network.
2. As the contract owner, use the `mintRNFTToken` function to mint new RiNFT tokens to specific addresses.
3. Set prompts for individual tokens using the `_setTokenPrompt` function.
4. Retrieve prompts for tokens using the `getTokenPrompt` function.
5. Use the standard ERC-721 functions to manage and interact with the NFTs.

Please ensure that you have the required dependencies, such as the OpenZeppelin library, properly installed before deploying and interacting with the contract.

## Credits
This project is created by ***[Khushi Gupta](https://github.com/Khushi-1703)***.

## License
This project is licensed under the ***[MIT License](https://github.com/Khushi-1703/SmartContractManagement/blob/main/LICENSE)***.
