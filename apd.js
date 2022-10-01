//Clase constructora
class Bebida{
    constructor(id, marca, tipo, precio, imagen){
        //propiedades o atributos
        this.id = id,
        this.marca = marca,
        this.tipo = tipo,
        this.precio = precio,
        this.imagen = imagen
    }
    //metodos
mostrarData(){
    console.log(`La bebida es ${this.marca}, el tipo de alcohol es ${this.tipo} y su precio es ${this.precio}`)
}
}

let productosEnCarrito = JSON.parse(sessionStorage.getItem("carrito"))|| []

const bebida1 = new Bebida(1,"Branca","Fernet", 1200, "./img/fernet.jpg")
const bebida2 = new Bebida(2,"Bombay","Gin Tonic", 4500, "./img/bombay.jpg")
const bebida3 = new Bebida(3,"Don Valentin", "Vino", 850, "./img/donvalentin.jpg")
const bebida4 = new Bebida(4,"SKY","Vodka", 1100, "./img/sky.jpg")
const bebida5 = new Bebida(5,"Distrito Federal", "Tekila", 900, "./img/df.jpg")
const bebida6 = new Bebida(6,"Red Label", "Whisky", 3500, "./img/redlabel.jpg")
const bebida7 = new Bebida(7,"Finca Las Moras", "Vino", 890, "./img/fincalasmoras.jpg")
const bebida8 = new Bebida(8,"DADA", "Vino", 800, "./img/dada.jpg")
const bebida9 = new Bebida(9,"Black Label", "Whisky", 5500, "./img/blacklabel.jpg")
const bebida10 = new Bebida(10,"Andes Ipa", "Cerveza", 400, "./img/andesipa.jpg")
const bebida11 = new Bebida(11,"Andes Roja", "Cerveza", 350, "./img/andesroja.jpg")
const bebida12 = new Bebida(12,"Andes Negra", "Cerveza", 340, "./img/andesnegra.jpg")
const bebida13 = new Bebida(13,"Absolut", "Vodka", 3800, "./img/absolut.jpg")
const bebida14 = new Bebida(14,"Pura Sangre", "Vino", 1200, "./img/purasangre.jpg")
const bebida15 = new Bebida(15,"El Enemigo", "Vino", 980, "./img/elenemigo.jpg")
const bebida16 = new Bebida(16,"Fond de Cave", "Vino", 1100, "./img/fondcave.jpg")
const bebida17 = new Bebida(17,"Bull Dog", "Gin Tonic", 8500, "./img/bulldog.jpg")
const bebida18 = new Bebida(18,"Malaria", "Gin Tonic", 6900, "./img/malaria.jpg")
const bebida19 = new Bebida(19,"1882", "Fernet", 850, "./img/1882.jpg")
const bebida20 = new Bebida(20,"White Hourse", "Whisky", 1900, "./img/whitehourse.jpg")









//quiero crear array stock
//dos formas inicializar el array:

const bodega = [bebida1, bebida2, bebida3, bebida4, bebida5, bebida6,bebida7,bebida8,bebida9,bebida10,bebida11,bebida12,bebida13,bebida14,bebida15,bebida16,bebida17,bebida18,bebida19,bebida20]
console.log(bodega)

let stock = []

localStorage.getItem("stock")? stock = JSON.parse(localStorage.getItem("stock")) : stock.push(bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7,bebida8,bebida9,bebida10,bebida11,bebida12,bebida13, bebida14,bebida15,bebida16,bebida17,bebida18,bebida19,bebida20)
console.log(stock)
/* if(localStorage.getItem("stock")){
    stock = JSON.parse(localStorage.getItem("stock"))

}
else{
    stock.push(bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7,bebida8,bebida9,bebida10,bebida11,bebida12,bebida13, bebida14,bebida15,bebida16,bebida17,bebida18,bebida19,bebida20)
    console.log(stock)
} */

//guardar stock en el storage
localStorage.setItem("stock", JSON.stringify(stock))

//Dark mode
    let btnDarkMode = document.getElementById("btn-dark")
    let btnLightMode = document.getElementById("btn-light")

    let modoOscuro

    localStorage.getItem("darkMode")? modoOscuro = localStorage.getItem("darkMode") : console.log("Entro por primera vez")
    localStorage.setItem("darkMode", false)
    
    /* if(localStorage.getItem("darkMode")){
        modoOscuro = localStorage.getItem("darkMode")
    }else{
        console.log("Entro por primera vez")
        localStorage.setItem("darkMode", false)
    } */
    


  /*   modoOscuro == "true" ? document.body.classList.add("modoOscuro") : document.body.classList.add("modoDia") */

     if(modoOscuro == "true"){
        document.body.style.backgroundColor = "black"
    document.body.style.color = "grey"
    
    }else{
        document.body.style.backgroundColor = "lightgreen"
    document.body.style.color = "grey"
    
     } 

     

    
    //evento darkmode
btnDarkMode.addEventListener("click",()=>{
 
     document.body.style.backgroundColor = "black"
    document.body.style.color = "antiquewhite" 
    localStorage.setItem("darkMode",true)
})
    
btnLightMode.addEventListener("click",()=>{
   
     document.body.style.backgroundColor = "lightgreen"
    document.body.style.color = "grey" 
    localStorage.setItem("darkMode",false)

    

})



 


let divProductos = document.getElementById("productos")

function mostrarCatalogo(array){
    divProductos.innerHTML = ""
    array.forEach((bebida)=>{
    let nuevoProducto = document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${bebida.marca}</h5>
      <p class="card-text">${bebida.tipo}</p>
      <p class="${bebida.precio <= 2000 ? "ofertaColor" : "precioComun"} card-text">${bebida.precio}</p>
    
      <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.appendChild(nuevoProducto)
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
    })
}

//function nuevaBebida actualizada a inputs
function guardarBebida(array){
    let bebidaInput = document.getElementById("bebidaInput")
    let marcaInput = document.getElementById("marcaInput")
    let precioInput = document.getElementById("precioInput")
    
    if(bebidaInput.value == "" || marcaInput.value == "" || precioInput.value == ""){

        Toastify({
            text: "Rellene todos los campos",
            duration: 2000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, red, brown )",
            },
          }).showToast();
    }else{
    let bebidaIngresada = new Bebida (array.length+1, bebidaInput.value, marcaInput.value, parseInt(precioInput.value), "./img/loading.jpg");
    
    console.log(bebidaIngresada)
    array.push(bebidaIngresada)

    Swal.fire({
        title : 'Su bebida ha sido agregada',
        icon : "success",
        timer : 2000,
        })
    
    mostrarCatalogo(array)
    console.log(array)
   
    //reset
     bebidaInput.value = ""
    marcaInput.value = ""
    precioInput.value = "" 

    //Libreria Toastify 
    Toastify({
        text: "Bebida guardada con exito",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, blue, darkblue )",
        },
      }).showToast();
    //guardar en el storage la bebida nueva ingresada
    localStorage.setItem("stock", JSON.stringify(array))

}}

let btnGuardar = document.getElementById("botonGuardar")
btnGuardar.addEventListener("click",()=>{
    guardarBebida(stock)
})


let btnMostrarCatalogo = document.getElementById("verCatalogoBtn")
btnMostrarCatalogo.addEventListener("click",()=>{
    
    setTimeout(()=>{
        mostrarCatalogo(stock)

    },2000)
})



//function ocultar catalogo
function ocultarCatalogo(){
    divProductos.innerHTML = ""
}
let btnOcultarCatalogo = document.getElementById("ocultarCatalogo")
btnOcultarCatalogo.onclick = ocultarCatalogo




//function agregar al carrito
function agregarAlCarrito(bebida){
    productosEnCarrito.push(bebida)
    console.log(productosEnCarrito)
    sessionStorage.setItem("carrito", JSON.stringify(productosEnCarrito)) 

    Swal.fire({
        title : 'Ha agregado un producto',
        icon : "success",
        showCancelButton : true ,
        confirmButtonText : "Acepto",
        timer : 2000,
        confirmButtonColor : "black",
        text : `La bebida ${bebida.marca} ha sido agregada al carrito`,
        imageHeight : 300,
        imageWidth : 300,
        imageAlt : 'No encontrada'
        })
}



//function filter para seleccionar bebidas de un mismo tipo

function filtrarCerveza(){
    let filtroCerveza = "Cerveza"
    let busqueda = stock.filter((bebida)=> bebida.tipo == filtroCerveza)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
     <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 
}

function filtrarVinos(){
    let filtroVino = "Vino"
    let busqueda = stock.filter((bebida)=> bebida.tipo == filtroVino)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
     <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 
}

function filtrarWhisky(){
    let filtroWhisky = "Whisky"
    let busqueda = stock.filter((bebida)=> bebida.tipo == filtroWhisky)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
     <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 
}

function filtrarFernet(){
    let filtroFernet = "Fernet"
    let busqueda = stock.filter((bebida)=> bebida.tipo == filtroFernet)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
     <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 
}

function filtrarVodka(){
    let filtroVodka = "Vodka"
    let busqueda = stock.filter((bebida)=> bebida.tipo == filtroVodka)
    console.log(busqueda)
    
    divProductos.innerHTML = ""
    busqueda.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
    <button id ="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</button>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 
}
    

    


 


    let searchCerveza = document.getElementById("search-cervezas")
    searchCerveza.addEventListener("click",()=>{
           filtrarCerveza()
    })




    let searchVinos = document.getElementById("search-vinos")
    searchVinos.addEventListener("click",()=>{
        filtrarVinos()
    })

    let searchFernet = document.getElementById("search-fernet")
    searchFernet.addEventListener("click",()=>{
        filtrarFernet()
    })


    let searchWhisky = document.getElementById("search-whisky")
    searchWhisky.addEventListener("click",()=>{
        filtrarWhisky()
    })




    let searchVodka = document.getElementById("search-vodka")
    searchVodka.addEventListener("click",()=>{
        filtrarVodka()
    })



    //filtro por buscador
    const inputBusqueda = document.getElementById("inputBuscador")

    const buscador = document.getElementById("search")
    buscador.addEventListener("click",()=>{
        filtroBusqueda()
    })


    //funcion de buscador
    function filtroBusqueda(){
        nombreBuscado = inputBusqueda.value
        let busquedaInput = stock.filter((bebida)=> bebida.tipo.toLowerCase() == nombreBuscado.toLowerCase())
        console.log(busquedaInput)

        divProductos.innerHTML = ""
    busquedaInput.forEach((bebida)=>{
       
     let nuevoProducto  =  document.createElement("div")
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 18rem;">
    <img src="${bebida.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${bebida.marca}</h5>
     <p class="card-text">${bebida.tipo}</p>
     <p class="card-text">${bebida.precio}</p>
    
     <button id="btn-carrito${bebida.id}" class="btnCompra btn btn-danger">Agregar al carrito</a>
    </div>
    </div>
    </div>`
    divProductos.append(nuevoProducto)
    
    
    
    }) 


        
    }

/* function eliminarBebida(array){
    
    let item = productosEnCarrito.find(bebida => bebida.id !== array)
    let indice = productosEnCarrito.indexOf(item)
    productosEnCarrito.splice(indice,1)

    
    
    console.log("Su producto se ha quitado")
   
} */


//DOM CARRITO
let modalBody = document.getElementById("modal-body")
let parrafoCompra = document.getElementById('precioTotal') 


//finalizar compra
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

botonFinalizarCompra.addEventListener("click",()=>{
finalizarCompra()
})

function finalizarCompra(){
    //preguntar si esta seguro
    Swal.fire({
        title : 'Esta seguro de realizar la compra?',
        icon : "info",
        showCancelButton: true,
        confirmButtonText : "Si, seguro",
        cancelButtonText : "No, no quiero",
        confirmButtonColor: 'green',
        cancelButtonColor : 'red',
        timer : 4000,
        }).then((result)=>{
            if(result.isConfirmed){
                swal.fire({
                    title: 'Compra realizada',
                    icon: 'succes',
                    confirmButtonColor: 'green',
                    text: `Muchas gracias por su compra ha adquirido nuestros productos`

                })
                //resetear o llevar a cero el array de carrito
                productosEnCarrito = []
                sessionStorage.removeItem("carrito")

            }else{
                Swal.fire({
                    title:'Compra no realizada',
                    icon: 'info',
                    text: 'La compra no ha sido realizada, sus productos siguen en el carrito',
                    confirmButtonColor: 'green',
                    timer: 3000
                })
            }
        })
    //resetear el array de carrito

    //limpiar el dom, el modalBody

}

 

let buttonCarrito = document.getElementById(`botonCarrito`)

 buttonCarrito.addEventListener("click",()=>{

    cargarProductosCarrito(productosEnCarrito)
}) 




function cargarProductosCarrito (array){
    modalBody.innerHTML = ""
    array.forEach((productoCarrito)=>{

        modalBody.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
            <img class="card-img-top" src="./${productoCarrito.imagen}" alt="${productoCarrito.tipo}">
            <div class="card-body">
                    <h4 class="card-title">${productoCarrito.marca}</h4>
                
                    <p class="card-text">$${productoCarrito.precio}</p> 
                    <button id="botonEliminar" class= "btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </div>    
        
        
        </div>
`
         

  

   let borrarProducto = document.getElementById(`botonEliminar`)
   let id = productoCarrito.id
 
    borrarProducto.addEventListener("click",()=>{
    let productosIndex = productosEnCarrito.find(element => element.id == id)
    productosEnCarrito.splice(productosIndex,1)
    sessionStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    cargarProductosCarrito(productosEnCarrito)
    Toastify({
        text: "Su producto se ha quitado",
        duration: 2000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "black",
        },
      }).showToast();
    
})  
})

    //calcular el total
    compraTotal(...array)

}





function compraTotal(...array){
    let acumulador = 0

    acumulador = array.reduce((acumulador, productoCarrito)=>{
        return acumulador + productoCarrito.precio

    },0)


/* if(acumulador == 0){

    parrafoCompra.innerHTML = ` <strong> No hay productos en el carrito </strong>`
}
    else{
    parrafoCompra.innerHTML = `El total de su carrito es ${acumulador}`
    } */

    //optimizando con if ternario

    acumulador == 0 ? parrafoCompra.innerHTML = ` <strong> No hay productos en el carrito </strong>` : parrafoCompra.innerHTML = `El total de su carrito es ${acumulador}`
}









//clase STORAGE/JSON

let bebida1JSON = JSON.stringify(bebida1)

localStorage.setItem("objetoBebidaJSON", bebida1JSON)

let bebidaStorageJSON = JSON.parse(localStorage.getItem("objetoBebidaJSON"))

console.log(bebida1JSON)
console.log(bebidaStorageJSON)

//Libreria Sweet Alert
/* Swal.fire({
    title : 'Ha agregado un producto',
    icon : "success",
    confirmButtonText : "Acepto",
    timer : 2000,
    }) */

    