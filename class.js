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
let divProductos = document.getElementById("productos")
let stock = []

const cargarStock = async ()=>{
    const res = await fetch('bebidas.json')
    const data = await res.json()
    console.log(data)
    for (let bebida of data){
        let bebidaNueva = new Bebida(bebida.id,bebida.marca, bebida.tipo, bebida.precio , bebida.imagen)
        stock.push(bebidaNueva)
    }
   


    divProductos.innerHTML = ""
    for (let bebida of data){
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
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(bebida)
    })
}
}
cargarStock()





/* fetch("bebidas.json")
.then((res)=>res.json())
.then((data)=>(console.log(data))) */

  /* let productosEnCarrito = JSON.parse(sessionStorage.getItem("carrito"))|| []  */

/* const bebida1 = new Bebida(1,"Branca","Fernet", 1200, "./img/fernet.jpg")
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
const bebida20 = new Bebida(20,"White Hourse", "Whisky", 1900, "./img/whitehourse.jpg") */



 

/* localStorage.getItem("stock")? stock = JSON.parse(localStorage.getItem("stock")) : stock.push(bebida1, bebida2, bebida3, bebida4, bebida5, bebida6, bebida7,bebida8,bebida9,bebida10,bebida11,bebida12,bebida13, bebida14,bebida15,bebida16,bebida17,bebida18,bebida19,bebida20)
console.log(stock)  */

localStorage.setItem("stock", JSON.stringify(stock))