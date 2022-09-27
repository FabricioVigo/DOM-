//Operadores avanzados

let numero= 10
if(numero == 5){
    console.log("El numero es igual a 5")
}else{
    console.log("El numero no es igual a 5")
}

//Utilizaer el operador ternario
//tres elem que van a estar en una sola linea
// (condicion) ? true : false

(numero == 5)  ?  console.log("El numero es igual a 5") : console.log("El numero no es igual a 5")

//Operador and -- Es un condicional con solo un IF, no hay else

let mayor10 = numero > 10 && console.log("Es mayor a 10")
console.log(mayor10)

//bebida1 ej. desestructuracion

/* let tipobebida1 = bebida1.tipo
let marcabebida1 = bebida1.marca
console.log(tipobebida1)
console.log(marcabebida1) */

let ademas = {
    deporte: "Futbol",
    musica : "Rap",

}


let usuario = {
    nombre: "SeniKeu",
    edad: 22,
    profesion: "Programador",
    ...ademas
}
console.log(usuario)

const {nombre,profesion} = usuario

/* console.log(nombre)
console.log(profesion) */


//desestructuracion con alias
const {nombre:name, edad:age, profesion:profession} = usuario


const numeros = [23,546,321,765,232,957]

console.log(Math.max(numeros))
console.log(Math.max(...numeros))



//Acceso condicional a un Objeto

const personaje = null

console.log(personaje?.nombre || "El usuario no existe")

const nombres = ["Juan","Pele","Seni","Fabro"]
console.log(nombres)
console.log(...nombres)
