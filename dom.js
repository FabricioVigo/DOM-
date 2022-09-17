//clase DOM
//primera forma de capturar elementos del DOM
//una de las formas dentro del getElement es mediante ID

let titulo = document.getElementById("tituloPrincipal")
console.log(titulo)

let paises = document.getElementsByClassName("paises")
console.log(paises)
for(let cadaPais of paises){
    console.log(cadaPais)
}

let elementos


//innerText modifica el texto de la etiqueta capturada

console.log(titulo.innerText)
titulo.innerText = "El dom en su maxima expresion"

let listaCiudades = document.getElementById("listaCiudades")
listaCiudades.innerHTML += `<li>Mendoza</li>
<p>Estas son nuestras ciudades</p>`

//Segunda forma de acceso:
//QuerySelector:
let paisesQS = document.querySelectorAll(".paises")
console.log(paisesQS)

// .

let nuevoLi = document.createElement("li")
nuevoLi.innerText = "Brasil"
console.log(nuevoLi)

document.body.append(nuevoLi)

let listaPaises = document.getElementById("listaPaises")
listaPaises.append(nuevoLi)




let padre = document.getElementById("personas")
//array con la inf a agregar
let personas = ["HOMERO","MARGE","BART","LISA","MAGGIE"];
//Iteramos el array con for...of
for(const persona of personas){
    //creamos un nodo <li> y agregamos al padre en c/ciclo

    let li = document.createElement("li");
    li.innerHTML = persona
    padre.appendChild(li);
}

