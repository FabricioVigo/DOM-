let preciosCongelados = document.getElementById("preciosCongelados")

preciosCongelados.addEventListener("mouseover", ()=>{
    Swal.fire({
        html: `<div class="swa-1">
        <div class="swa-container">
        <h4 class="title-func mt-5">¿Por que elerginos?</h4>
        <p class="parraf-2">Precios congelados cada 4 meses</p>
        <p class="parraf-2">Envío gratis, ¡siempre!</p>
        <p class="parraf-2">Los mejores precios</p>
        
      </div>
      

      <div class="swa-container">
        <div class="image">
          <img src="./img/heladera-ipa.jpg" alt="" class="image__img">
          </div>
          </div>`,
        
        timer : 6000,
        imageHeight : 300,
        imageWidth : 300,
        grow: 'fullscreen'
        
        
        })
    })


    let iconSweet = document.getElementById("iconSweet")


    iconSweet.addEventListener("mouseover", ()=>{
        Swal.fire({
            html: `<div class="swa-1">
            <div class="swa-container">
            <img src="./img/sec.jpg" alt="" class="questions__img">
    
          </div>
    
          <div class="swa-container">
            <p class="parraf"><img src="./img/icon-1.jpg" alt=""> Elegi tus bebidas</p>
            <p class="parraf"><img src="./img/icon-2.jpg" alt=""> Defini la <strong class="strong">frecuencia</strong>de entrega</p>
            <p class="parraf"><img src="./img/icon-3.jpg" alt=""> <strong class="strong">Recibila en tu casa</strong>, con envio GRATIS</p>
    
          </div>
          </div>`
        ,
            
            timer : 6000,
            imageHeight : 300,
            imageWidth : 300,
            grow: 'fullscreen'
            
            
            })
    })

    simplyCountdown('#cuenta', {
        year: 2022, 
        month: 12, 
        day: 20, 
        hours: 11, 
        minutes: 40, 
        seconds: 22, 
        words: { 
            days: { singular: 'dia', plural: 'dias' },
            hours: { singular: 'hora', plural: 'horas' },
            minutes: { singular: 'minuto', plural: 'minutos' },
            seconds: { singular: 'segundo', plural: 'segundos' }
        },
        plural: true, 
        inline: false, 
        inlineClass: 'simply-countdown-inline', 
        
        enableUtc: false, 
        onEnd: function() { return; }, 
        refresh: 1000, 
        sectionClass: 'simply-section', 
        amountClass: 'simply-amount', 
        wordClass: 'simply-word', 
        zeroPad: false,
        countUp: false
});

// Also, you can init with already existing Javascript Object.
let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });

