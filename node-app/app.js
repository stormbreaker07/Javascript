const chalk = require('chalk')
const validator = require('validator')
const yargs  =  require('yargs')
const work = require('./util.js')

const name = 'nodes project'
console.log(validator.isEmail('tanuj07yadav07@gmail.com'))
console.log(validator.isURL('abes.ac.in'))
console.log(chalk.redBright('hello world'))
console.log(process.argv)

/*
const commend = process.argv[2]


if(commend === 'add') {
console.log('ya we can add it')
}
*/
console.log(yargs.argv)