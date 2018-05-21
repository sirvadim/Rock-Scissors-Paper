pragma solidity ^0.4.22;

import "./Ownable.sol";
import "./interfaces.sol";
import "./SafeMath.sol";

contract RockScissorsPaper is Ownable {
	using SafeMath for uint256;

    uint public totalGames = 0;
    mapping (address => uint) public balancePlayer;
    uint256 public totalNumberOfGames = 0;
    uint256 public price = 1 ether;
    uint256 bank = 0;
    ERC20Interface betToken;

    constructor(address _token) public {
        betToken = ERC20Interface(_token);
        price = 2 ether;
    }

    function makeDeposit(uint bet) public {
    	require(betToken.allowance(msg.sender, this) >= bet);
        require(betToken.transferFrom(msg.sender, this, bet));
        bank.add(bet);
        balancePlayer[msg.sender].add(bet);
    }

    function play(uint bet) public {
    	totalNumberOfGames.add(1);
        uint num = _generateRandom();
        if(num == 0)
        	balancePlayer[msg.sender].add(bet);
        else if(num == 1)
        	balancePlayer[msg.sender].sub(bet);
    }

    function _generateRandom() private view returns (uint) {
        uint rand = uint(keccak256(block.number));
        return rand % 3;
    }

    function getReward() public {
    	betToken.transfer(msg.sender, balancePlayer[msg.sender]);
        bank.sub(balancePlayer[msg.sender]);
        balancePlayer[msg.sender] = 0;
    }

    function withdraw() public onlyOwner {
        betToken.transfer(msg.sender, betToken.balanceOf(this));
        bank = 0;
    }

}