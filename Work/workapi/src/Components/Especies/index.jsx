import React, { useState } from 'react'
import "./estilos.css"
const Especies = () => {

    const [estado, setEstado] = useState([])

    const electric = async() =>{
        const response = await fetch("https://pokeapi.co/api/v2/type/13/")
        const data = await response.json()

        const pokemon = []
        for(let i = 0; data.pokemon.length > i; i++){
            const nombre = data.pokemon[i].pokemon.name

            const url = data.pokemon[i].pokemon.url

            const responsePokemon = await fetch(url)
            const dataPoke = await responsePokemon.json()
            console.log(dataPoke)
            const foto = dataPoke.sprites.other.dream_world.front_default

            if(foto !== null){
                let info = {
                    nombre: nombre,
                    img: foto,
                }
                pokemon.push(info)
            }
        }

        setEstado(pokemon)
    }


    electric()
    return (
        <main className='container-especies'>
            <ul className='ulEspecies'>
                <li>Electric</li>
                <li>Flying</li>
                <li>Normal</li>
                <li>Ghost</li>
                <li>Posion</li>
                <li>Water</li>
            </ul>

        <section className='section'>
            <p>
            {
                estado.map((esta)=>{
                    return (
                        <div className="card">
                            <div className="dar frente">
                                <p><img src={esta.img}></img></p>
                            </div>
                            <div className='dar atras'>
                                <p>{esta.nombre}</p>
                            </div>
                            
                        </div>
                        
                    )
                })
            }
            </p>

            </section>

        </main>

    )
}

export default Especies