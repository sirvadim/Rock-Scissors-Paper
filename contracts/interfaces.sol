pragma solidity ^0.4.22;

contract ERC20Interface {
	function approve(address spender, uint256 value) public returns (bool);
    function transfer(address _to, uint256 _value) public;
    function transferFrom(address _from, address _to, uint256 _value) public returns(bool success);
    function balanceOf(address _owner) public constant returns (uint256 balance);
    function allowance(address _owner, address _spender) public constant returns (uint256 remaining);
}