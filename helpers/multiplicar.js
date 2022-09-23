const fs = require('fs');
const colors = require('colors');
// Mediante promesa
// const createFile = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log('=============');
//         console.log('Tabla del:', base);
//         console.log('=============');


//         let salida = '';

//         for (let index = 1; index <= 10; index++) {
//             salida += `${base} x ${index} = ${base * index}\n`;
//         }

//         console.log(salida);
//         const fileName = `tabla-${base}.txt`;

//         fs.writeFileSync(fileName, salida);


//         fileName
//             ? resolve(fileName)
//             : reject(`No se ha podido crear el archivo ${filename}`);
//     });
// }

// Mediante async await, 
// solo con poner async ya está retornando una promesa
// Por lo que nos ahorramos declarar tanto la promesa como 
// retornar a través del resolve y el reject

// El resolve se devuelve a través del return dentro del try
// El reject se devuelve desde el catch
const createFile = async (base = 5, listar = false, hasta = 10) => {

    try {


        let salida, consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${base * index}\n`;
        }

        if (listar) {
            console.log('============='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('============='.green);
            console.log(consola);
        }

        const fileName = `./salida/tabla-${base}.txt`;

        fs.writeFileSync(fileName, salida);

        return fileName;

    } catch (error) {

        throw error;

    }

}

module.exports = {
    createFile
}

