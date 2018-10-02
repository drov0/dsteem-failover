var dsteem = require('dsteem');

//TODO : check client options to change the timeout
var client = new dsteem.Client('https://api.steemit.com');


function sendop(ops, private_key)
{
    return new Promise(resolve => {
        client.broadcast.sendOperations([ops], private_key).then(
            function(result) {
                return resolve(result);
            },
            function(error) {
                    return resolve("=");
            }
        );
        
    })
}

function test() {

    const op = [
        'withdraw_vesting',
        {
            account: "howo",
            vesting_shares: "5.000 VESTS",
        },
    ];

    sendop(op, privateKey);

}

test()