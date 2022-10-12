//Dark mode
let btnDarkMode = document.getElementById("btn-dark")
let btnLightMode = document.getElementById("btn-light")

let modoOscuro

localStorage.getItem("darkMode")? modoOscuro = localStorage.getItem("darkMode") : console.log("Entro por primera vez")
localStorage.setItem("darkMode", false)

 if(modoOscuro == "true"){
    document.body.style.backgroundColor = "#110f2b"
document.body.style.color = "grey"

}else{
    document.body.style.backgroundColor = "#ccc"
document.body.style.color = "grey"

 } 

 


//evento darkmode
btnDarkMode.addEventListener("click",()=>{

 document.body.style.backgroundColor = "#110f2b"
document.body.style.color = "antiquewhite" 
localStorage.setItem("darkMode",true)
})

btnLightMode.addEventListener("click",()=>{

 document.body.style.backgroundColor = "#ccc"
document.body.style.color = "black" 
localStorage.setItem("darkMode",false)



})