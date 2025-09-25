//import { restar } from './utils.js';

//const resultado = restar(590, 239);
//console.log(resultado);


/*
function verificarUsuario(usuario) {
 
    return new Promise((resolve, reject) => {
    if (usuario === "admin") {

    resolve("Acceso concedido");
    } else {
    
    reject("Acceso denegado");
    }
    });
}


verificarUsuario("admin")
    .then(res => console.log(res)) 
    .catch(err => console.error(err));


verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err));
*/


function SimularPeticionAPI(){

    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos Recibidos Correctamente");
        },5000);
    });
}

async function ObtenerDatos() {
    
    let result = await SimularPeticionAPI();

    console.log(result);
    

    }

ObtenerDatos();
