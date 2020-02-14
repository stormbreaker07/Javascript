const yargs = require('yargs')

var x = 20;
var y = 10;

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add to number',
    handler: function() {
        console.log('add x and y')
        console.log(x+y)
    }
})

yargs.command({
    command: 'minus',
    describe: 'minus to number',
    handler: function() {
        console.log('minus x and y')
        console.log(x-y)
    }
})

yargs.command({
    command: 'multiply',
    describe: 'multiply to number',
    handler: function() {
        console.log('multiply x and y')
        console.log(x*y)
    }
})

yargs.command({
    command: 'divide',
    describe: 'divide to number',
    handler: function() {
        console.log('divide x and y')
        console.log(x/y)
    }
})

console.log(yargs.argv)