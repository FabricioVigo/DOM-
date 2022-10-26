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
    nuevoProducto.innerHTML = `<div id=${bebida.id} <div class="card" style="width: 14rem;">
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

    
    
    localStorage.setItem("stock", JSON.stringify(stock)) 
    


    
    //boton carrito
    
    let btnAgregar = document.getElementById(`btn-carrito${bebida.id}`)
    
    btnAgregar.addEventListener("click",()=>{
        

        agregarAlCarrito(bebida)
    })
}

}
cargarStock()
