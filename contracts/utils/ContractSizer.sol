// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

//USED IN TESTS ONLY; SHOULD NOT BE DEPLOYED 
contract ContractSizer {
    constructor() { }
    
    function getContractSize(address contractAddress) external view returns (uint32) {
        
        uint32 size;
        assembly {
            size := extcodesize(contractAddress)
        }
        
        return size;
    }
}