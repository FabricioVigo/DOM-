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

    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })

    
    
    
    
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
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
    
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
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
    
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
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
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
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
    }) 
}

//capturando checkbox    
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
    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    console.log(btnAgregar)
    btnAgregar.addEventListener("click",()=>{
        console.log(bebida)

        agregarAlCarrito(bebida)
    })
    
    }) 


        
    }


//DOM CARRITO
let modalBody = document.getElementById("modal-body")
let parrafoCompra = document.getElementById('precioTotal') 


//finalizar compra
let botonFinalizarCompra = document.getElementById("botonFinalizarCompra")

botonFinalizarCompra.addEventListener("click",()=>{
finalizarCompra()
})

function finalizarCompra(){
    
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
    

}

 

let buttonCarrito = document.getElementById(`botonCarrito`)

 buttonCarrito.addEventListener("click",()=>{

    cargarProductosCarrito(productosEnCarrito)
}) 



let productosEnCarrito = JSON.parse(sessionStorage.getItem("carrito"))|| [] 

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
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
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

    acumulador == 0 ? parrafoCompra.innerHTML = ` <strong> No hay productos en el carrito </strong>` : parrafoCompra.innerHTML = `El total de su carrito es ${acumulador}`
}   