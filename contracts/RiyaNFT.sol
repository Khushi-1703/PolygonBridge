// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RiNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string[] private tokenURIs = [
        "ipfs://bafkreiezen2uov275ph4bqjcinuio63v2admnrgce4a426nuqu6ibnhbvm",
        "ipfs://bafkreigdy5exkn76tqdb2u7lbcccmgn67243e3zye5wzwilzwqryb34lxy",
        "ipfs://bafkreifphhxuo3jzvf24fhzen7cupuonlw5r7i47p4r4rt3kwrxttydn6e",
        "ipfs://bafkreiai24k3h2xt26mwzdbjx7eh4zp6pfqekt7ndv33gk7g5cwsypgbwy",
        "ipfs://bafkreigyvaro6imkljrmbgvv2simxxcdhwtt7ozzemlpecqkmgp6v55qka"
    ];

    constructor() ERC721("RiNFT", "RNFT") {
        tokenURIs.push("uri1");
        tokenURIs.push("uri2");
        tokenURIs.push("uri3");
        tokenURIs.push("uri4");
        tokenURIs.push("uri5");
    }
    

    function mintRNFTToken(address to) public onlyOwner returns (uint256) {
        _tokenIds.increment();
        uint256 tokenId = _tokenIds.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURIs[tokenId % tokenURIs.length]);
        return tokenId;
    }

    mapping(uint256 => string) private _tokenPrompts;

    function _setTokenPrompt(uint256 tokenId, string memory prompt) internal {
        _tokenPrompts[tokenId] = prompt;
    }

    function getTokenPrompt(uint256 tokenId) public view returns (string memory) {
        return _tokenPrompts[tokenId];
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        delete _tokenPrompts[tokenId];
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
