//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import './TokenBase.sol';

contract TokenBsc is TokenBase {
    constructor() TokenBase("BSC Token", "BTK") {}
}