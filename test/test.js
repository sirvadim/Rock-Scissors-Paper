const Referrer = artifacts.require('RockScissorsPaper')
// const expectThrow = require('../lib/expectThrow.js')

const gasPrice = 22000000000
const BET = 10**18;

function initContracts() {
  before(async ()=>{
    // deployer.deploy(Referrer);
    Ref = await Referrer.deployed()
  })
}
module.exports = function(deployer) {
   before(async ()=>{
    deployer.deploy(Referrer);
    // Ref = await Referrer.deployed()
  })
};


contract('Referrer', function (accounts) {

    let Ref
    let operator = accounts[0]
    let player   = accounts[1]
    let player2  = accounts[2]
    let referrer = accounts[3]


    initContracts()
    before('setup contract', async function() {
         Ref = await Referrer.deployed()
    })
    
    describe('testing', function() {
        describe('add player with referrer', function() {
            
            it('add player', async function() {
                let result = await Ref.play(BET, {from: operator});

                // return Ref.setService(player, referrer, {from: operator}).then(function(res){
                //     //console.log(res.receipt.gasUsed * gasPrice / 10**18, ' ETH')
                // })
            })

            // it('check addresses', async function() {
            //     let result = await Ref.getService.call(player)
            //     let _operator = result[0]
            //     let _referrer = result[1]
            //     assert.equal(_operator, operator, 'invalid operator address')
            //     assert.equal(_referrer, referrer, 'invalid referrer address')
            // })

            // it('revert rewriting', async function() {
            //     await expectThrow(Ref.setService(player, referrer, {from: operator}))
            // })
        })

        // describe('add player without referrer', function() {
            
        //     it('add player', function() {
        //         Ref.setService(player2, 0, {from: operator})
        //     })

        //     it('check addresses', async function() {
        //         let result = await Ref.getService.call(player2)
        //         let _operator = result[0]
        //         let _referrer = result[1]
        //         assert.equal(_operator, operator, 'invalid operator address')
        //         assert.equal(_referrer, operator, 'invalid referrer address')
        //     })

        //     it('revert rewriting', async function() {
        //         await expectThrow(Ref.setService(player2, referrer, {from: operator}))
        //     })
        // })
    })

})