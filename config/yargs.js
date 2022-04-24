const argv = require('yargs')
                .options({
                    'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplcar'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muestra la tabla en la consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Indica hasta que numero se va a multiplicar'
                    }
                })
                .check( (argv) => {
                    if (isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true
                })
                .check( (argv) => {
                    if (isNaN(argv.h)){
                        throw 'El "hasta" tiene que ser un número'
                    }
                    return true
                })
                .argv

module.exports = argv