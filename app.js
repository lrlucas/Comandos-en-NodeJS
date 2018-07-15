
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv;
var colors = require('colors/safe');




/* let argv2 = process.argv; */
/* console.log(argv.base) */
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
        .then( (archivo) => {
            console.log(`Archivo creado:`, colors.green(archivo))
        }).catch( (err) => {
            console.log(`Error: ${ err }`)
        }); 
    break;
    default:
        console.log('Comando no reconocido');
}




/* let parametro = argv[2];
let base = parametro.split('=')[1]; */

