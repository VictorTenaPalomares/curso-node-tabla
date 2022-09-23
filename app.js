
const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

// Limpiar la consola antes de ejecutar
console.clear();

// Lineas para explicar cómo se reciben datos por comando en JS
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

//  console.log(argv);


createFile(argv.b, argv.l, argv.h)
    .then(fileName => console.log(fileName.rainbow, 'created'))
    .catch(err => console.log(err));
