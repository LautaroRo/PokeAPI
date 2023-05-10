import React, { useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import girar from "./../../Assets/loading.png"

const Especies = () => {


    const [estadoEspecie, setEstadoEspecie] = useState([])
    const [count, setCount] = useState(13)
    const [Loading, setLoading] = useState(false)
    const Especies = async() =>{
        console.log(count)
        const response = await fetch(`https://pokeapi.co/api/v2/type/${count}/`)
        const data = await response.json()

        const pokemon = []
        
        for(let i = 0; data.pokemon.length > i; i++){
            const nombre = data.pokemon[i].pokemon.name

            const url = data.pokemon[i].pokemon.url

            const responsePokemon = await fetch(url)
            const dataPoke = await responsePokemon.json()
            const foto = dataPoke.sprites.other.dream_world.front_default

            if(foto !== null){
                let info = {
                    nombre: nombre,
                    img: foto,
                }
                pokemon.push(info)
            }
        }

        setTimeout(()=>{
            setEstadoEspecie(pokemon)
            setLoading(false)
        },900)
        
    }
    useEffect(()=>{
        Especies()

            setLoading(true)
        
    },[count])


    const drechav2 = (e) =>{
        e.preventDefault()

        const ul = document.querySelector(".ulEspecies")
        

        try{
            ul.scrollLeft += ul.offsetLeft
        }catch{
            ul.scrollLeft += ul.offsetLeft
        }
    }


    const izquierdav2 = (e) =>{
        e.preventDefault()

        const ul = document.querySelector(".ulEspecies")

        try{
            ul.scrollLeft -=ul.offsetLeft
        }catch{
            ul.scrollLeft -= ul.offsetLeft
        }
    }



    const click = (e) => {
        e.preventDefault();
            const valor = e.target.id
            setCount(valor)
        
                document.querySelector(".activado").classList.remove("activado")
                e.target.classList?.add("activado")
            
    }

    return (
        <main className='container-especies'>
        <div className='container-ul'>
            <div>
                <button className='btonv2' onClick={izquierdav2}><FontAwesomeIcon className="iconv2" icon={faArrowLeft}/></button>
            </div>

            <ul className='ulEspecies'>
                <li className='liEspecies activado' id='18'  onClick={click}>Fairy</li>
                <li className="liEspecies" id='17'   onClick={click}>Dark</li>
                <li className="liEspecies" id="16"  onClick={click}>DRAGON</li>
                <li className="liEspecies" id='15' onClick={click}>Ice</li>
                <li className="liEspecies" id='14' onClick={click}>PSYCHIC</li>
                <li className="liEspecies" id='13' onClick={click}>Electric</li>
                <li className="liEspecies" id='8'  onClick= {click}>Ghost</li>
                <li className="liEspecies" id='7' onClick={click}>Bug</li>
                <li className="liEspecies" id='9'  onClick={click}>Steel</li>
                <li className="liEspecies" id='12' onClick={click}>Grass</li>
                <li className="liEspecies" id='6' onClick={ click}>Rock</li>
                <li className="liEspecies" id='5' onClick={click}>Ground</li>
                <li className="liEspecies" id='4' onClick={click}>Poison</li>
                <li className="liEspecies" id='3' onClick={click}>Flying</li>
                <li className="liEspecies" id='2' onClick={click}>Fighting</li>
                <li className="liEspecies" id='1' onClick={click}>Normal</li>
                <li className="liEspecies" id='11' onClick={click}>Water</li>
                <li className="liEspecies" id='10' onClick={click}>Fire</li>
            </ul>

            <div>
                <button className='btonv2' onClick={drechav2}><FontAwesomeIcon className='iconv2' icon={faArrowRight}/></button>
            </div>
        </div>
        {
            Loading === true
            ?
            <div className='DivLoading'>
                <img className='loading' src={girar}></img>
            </div>
            :
            null
        }

    <div className="container-section">
        <section className='section'>
        <ul className='ulGrid'>
        {
            estadoEspecie.map((esta)=>{
                return (
                    <div className="card">
                        <div className="dar frente">
                            <img src={esta.img}></img>
                        </div>
                        <div className='dar atras'>
                            <p>{esta.nombre}</p>
                        </div>
                    </div>
                    )
                })
            }
        </ul>
        </section>  
        </div>       
        </main>

)
}


export default Especies