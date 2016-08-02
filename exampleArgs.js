var argv = require('yargs').argv
var command = argv._[0]

console.log(argv)

if((command == 'hello')&&(typeof argv.name !== 'undefined')&&(typeof argv.lastName !== 'undefined')) {
    console.log('hello ' + argv.name + ' ' + argv.lastName + '!')
}

else if((command == 'hello')&&(typeof argv.name !== 'undefined')) {
    console.log('hello ' + argv.name + '!')
}

else {
    console.log('Hello world')
}
