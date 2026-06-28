// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Lock {
    uint public unlockTime;
    address payable public owner;

    constructor() payable {
        unlockTime = block.timestamp + 365 days;
        owner = payable(msg.sender);
    }
}
