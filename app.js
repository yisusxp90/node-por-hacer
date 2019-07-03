const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('==========================='.green);
            console.log(colors.green(tarea.descripcion));
            console.log(colors.green('Estado: ', tarea.completado));
            console.log('==========================='.green);
        }
        console.log("mostrar las tareas por hacer");
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log("Actualiza una tarea por hacer");
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        console.log("borra una tarea por hacer");
        break;
    default:
        console.log("comando no reconocido");
}