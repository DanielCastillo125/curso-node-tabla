const fs = require('fs')
const colors = require('colors')

const crearArchivo = async(base = 5, listar, hasta = 10) => {

    try {
    
        let salida = ''
        let consola = ''
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`
            consola += `${ base } x ${ i } = ${ colors.bold(base * i) }\n`
        }

        if (listar){
            console.log(colors.rainbow('==================='))
            console.log(colors.red.bold(`   Tabla del ${ base }`))
            console.log(colors.rainbow('==================='))
            console.log(consola)
        }
    
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
    
        return colors.bold.green(`tabla-${ base }.txt`)

    } catch (error) {
        throw error
    }

}

module.exports = {
    crearArchivo
}