var program = require('commander');
// const prompt = require('../prompt')
const create = require('../lib/create')

program
    .version('0.1.0')
    .command('create <name>')
    .description('create a new project powered by vue-cli-service')
    .action((name, options) => { 
        create(name, options)
    })

program.parse()