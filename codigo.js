"use strict";
const usuariosy = async ()=>{
 let peticion = await axios("https://reqres.in/api/users?page=2")
 return peticion.data.data
}
const usrID =async()=>{
    let usuarios =await usuariosy() 
    let ID = prompt("id")
    let resultado =`Nombre: ${usuarios[ID].first_name}<br>
                    apellido: ${usuarios[ID].last_name}<br>
                    e-mail: ${usuarios[ID].email}<br>
                    ID usuario: ${usuarios[ID].id}`
 let h1 =document.createElement("h1")
 let caja = document.querySelector(".container__msj").appendChild(h1).innerHTML= resultado
}


 document.getElementById("boton").addEventListener("click",usrID)

