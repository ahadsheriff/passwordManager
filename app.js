console.log('starting password manager');

var storage = require('node-persist');
storage.initSync()

// account.name Facebook
// account.username User12!
// account.password Password123
function createAccount(account) {
    var accounts = storage.getItemSync('accounts');
    // if accounts is undefined (use typeof)
    //      set accounts = []
    if (typeof accounts === 'undefined') {
        accounts = []
    }

    // push on new account
    accounts.push(account)
    // save accounts locally
    storage.setItemSync('accounts', accounts)

    // return account parameter
    return account
}

function getAccount(accountName) {
    // var accounts use getItemSync
    var accounts = storage.getItemSync('accounts')
    var matchedAccount

    accounts.forEach(function(account) {
        if (account.name === accountName) {
            matchedAccount = account
        }
    });

    return matchedAccount

}

/*
createAccount({
    name: 'Facebook',
    username: 'ahadsheriff@gmail.com',
    password: 'helloWorld21'
})
*/

var facebookAccount = getAccount('Facebook')
console.log(facebookAccount)

