const usuarios = async ()=>{
    let peticion = await axios("https://reqres.in/api/users?page=2")
    return peticion
    }
    
    const userId =  (Id)=>{
        return  new Promise((res,rej)=>{
            let resultados = usuarios().then(res=>res.data.data);
            res(resultados.then(res=>{
                let array =[res]
                for(const i=0; i<array.length; i++){
                 return array
                }}))
                
    })
        }
    
    userId().then(res=>console.log(res))
    