const Token = artifacts.require("ERC20")
// const Referrer = artifacts.require("Referrer")
const Lottery = artifacts.require("RockScissorsPaper")
// const LotteryFactory = artifacts.require("LotteryFactory")
// const BlockMiner = artifacts.require("BlockMiner")

module.exports = function(deployer, network) {
    if (network == "develop" || network == "development") {
        deployer.deploy(Token).then(()=>{
            return deployer.deploy(Lottery, Token.address)
        })/*.then(()=>{
            return deployer.deploy(LotteryFactory, Token.address)
        }).then(()=>{
            return deployer.deploy(BlockMiner)
        })*/.then(()=>{
            console.log('Migrate success!')
        })
    } else if (network == "ropsten") {
        var adrERC20 = "0x5D1E47F703729fc87FdB9bA5C20fE4c1b7c7bf57";
        // var adrRef = "0x674ff87adfe928b8b0ffbbddf7faeb5ae7a1f9d6";
        var owner = "0x03c6eAc074F9132feF8A6f1Aeb7Df8Deac507D4D";
        var tokenContract = Token.at(adrERC20);
        // var refContract = Token.at(adrRef);
		deployer.deploy(Lottery, tokenContract.address).then(()=>{
            console.log('Migrate success!')
        })
    }
};