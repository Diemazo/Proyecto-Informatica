

let girar = true
let menu = document.getElementById("menu")

let ver = true
let Inicio = document.getElementById("Inicio")
let Productos = document.getElementById("Productos")
let Reservarsiones = document.getElementById("Reservar")
let Contacto = document.getElementById("Contacto")


for(let i = 0; i < barras.length; i++) {
    barras[i].addEventListener("click", () =>{
        menubar.style.transition = "0.5s"
        barras[i].style.transitio = "0.5s"
        barras[i].style.position = "Relative"
        if(girar) {
            barras[i].style.transition = "0.5s"
            barras[1].style.opacity = "0"
            barras[0].style.transform= "rotate(45deg)" 
            barras[0].style.top="12px"
            barras[0].style.transform= "rotate(-45deg)"
            barras[2].style.bottom= "15px"
            barras[2].style.left= "-1px"
            girar = false 
            menubar.style.zIndex = 2000
            menubar.style.opacity= 1
        }
        else{
            barras[i].style.transition = "0.5s"
            barras[1].style.opacity = "1"
            barras[0].style.transform= "rotate(0deg)" 
            barras[0].style.top="0px"
            barras[0].style.transform= "rotate(0deg)"
            barras[2].style.bottom= "0px"
            barras[2].style.left= "0px"
            girar = false 
            menubar.style.zIndex = -100
            menubar.style.opacity= 1   
        }
        Inicio.addEventListener("click", () => {
         if (ver){
                window.scroll (0,780)
                barras[i].style.transition = "0.5s"
                barras[1].style.opacity = "1"
                barras[0].style.transform= "rotate(0deg)" 
                barras[0].style.top="0px"
                barras[0].style.transform= "rotate(0deg)"
                barras[2].style.bottom= "0px"
                barras[2].style.left= "0px"
                girar = false 
                menubar.style.zIndex = -100
                menubar.style.opacity= 1     

           
            }})
        Productos.addEventListener("click", () => {
                if (ver){
                       window.scroll (0,4000)
                       barras[i].style.transition = "0.5s"
                       barras[1].style.opacity = "1"
                       barras[0].style.transform= "rotate(0deg)" 
                       barras[0].style.top="0px"
                       barras[0].style.transform= "rotate(0deg)"
                       barras[2].style.bottom= "0px"
                       barras[2].style.left= "0px"
                       girar = false 
                       menubar.style.zIndex = -100
                       menubar.style.opacity= 1     
       
                  
                   }})
        Reservarsiones.addEventListener("click", () => {
                    if (ver){
                        window.scroll (0,900)
                        barras[i].style.transition = "0.5s"
                        barras[1].style.opacity = "1"
                        barras[0].style.transform= "rotate(0deg)" 
                        barras[0].style.top="0px"
                        barras[0].style.transform= "rotate(0deg)"
                        barras[2].style.bottom= "0px"
                         barras[2].style.left= "0px"
                        girar = false 
                        menubar.style.zIndex = -100
                        menubar.style.opacity= 1     
           
                      
                    }})
        Contacto.addEventListener("click", () => {
                        if (ver){
                        window.scroll (0,8000)
                        barras[i].style.transition = "0.5s"
                        barras[1].style.opacity = "1"
                        barras[0].style.transform= "rotate(0deg)" 
                        barras[0].style.top="0px"
                        barras[0].style.transform= "rotate(0deg)"
                        barras[2].style.bottom= "0px"
                        barras[2].style.left= "0px"
                        girar = false 
                        menubar.style.zIndex = -100
                        menubar.style.opacity= 1        
                    }})
    })}