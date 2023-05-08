import React,{useEffect, useState} from 'react'
import "./estilos.css"
const Todos = () => {
    
    const [obtener, setObtener] = useState([])
    const [mantener, setMantener] = useState([])
    const fila = document.querySelector(".flexFotos")
    
    const buscar = (e) =>{

        const valorBusqueda = e.target.value;

        if(valorBusqueda.length > 2){
            const buscador = obtener.filter(element =>{
                return element.nombre?.toLowerCase().includes(valorBusqueda.toLowerCase())
            })
            
            setObtener(buscador)
        }else{
            setObtener(mantener)
        }
        

        
    }
    
    useEffect(()=>{
        const todos = async()=>{
            let url = "https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1280";
            const response = await fetch(url);
            const data = await response.json();

            console.log(data)
            
            const pokemonsAlmacenados = []
    
            for(let i = 0; i < data.results.length; i++){
    
                const urlFotos = data.results[i].url
    
                let url2 = urlFotos
                const response2 =  await fetch(url2);
                const data2 =  await response2.json();
    
    
                const foto = data2.sprites.other.dream_world.front_default
                const foto2 = data2.sprites.other.home.front_default
    
    
    
                if (foto !== null) {
                    let informacion = {
                        fotos: foto
                    };
                    pokemonsAlmacenados.push(informacion);
                    } else if (foto2 !== null) {
                    let informacion2 = {
                        fotos: foto2
                    };
    
                    pokemonsAlmacenados.push(informacion2);
                    }
                
                console.log(pokemonsAlmacenados)
            }
    
            setObtener(pokemonsAlmacenados)
            setMantener(pokemonsAlmacenados)
        }
        todos()
        
    },[])

    

    const subir = (e) =>{
        e.preventDefault()

        try{
        fila.scrollTop += fila.offsetHeight
        }
        catch{
            fila.scrollTop += fila.offsetHeight 
        }
        
    }


    const restar = (e) =>{
        e.preventDefault()

        try{
        fila.scrollTop -= fila.offsetHeight
        }
        catch{
            fila.scrollTop -= fila.offsetHeight
        }
        
    }

    return (
        <div className='containerTodos'>
            
            <input type='text' onChange={buscar} />
            <button onClick={restar}>-</button>
            <div className='flexFotos'>

                <div className='gridFotos'>
            
                {obtener.map((ob)=>{
                    return (
                        <div className='fotoscontainer'>
                            <img src={ob.fotos} alt="" />
                        </div>)
                })}
                
                </div>
            </div>
            <button onClick={subir}>+</button>
        </div>
    )
}

export default Todos