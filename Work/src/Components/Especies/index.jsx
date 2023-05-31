import React, { useContext,useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons"
import girar from "./../../Assets/loading.png"
import { Use } from '../../Context/Usecontext'

const Especies = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [estadoEspecie, setEstadoEspecie] = useState([])
    const [count, setCount] = useState(18)
    const [Loading, setLoading] = useState(false)

    const {Almacenar} = useContext(Use)

    console.log(Almacenar)
    const Especies = async() =>{
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

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const click = (e) => {
        e.preventDefault();
        if(e.target.id === "20"){
            setEstadoEspecie(Almacenar)
            console.log(estadoEspecie)
        }else{
            const valor = e.target.id;
            setCount(valor);
        }

        
        const activados = document.querySelector(".activado");
        if (activados) {
            activados.classList.remove("activado");
        }
        e.target.classList.add("activado");
};


        const click2 = (e) => {
            e.preventDefault();
            if(e.target.id === "20"){
                setEstadoEspecie(Almacenar)
                console.log(estadoEspecie)
            }else{
                const valor = e.target.id;
                setCount(valor);
            }
            const activados = document.querySelector(".activado2");
            if(activados){
                activados.classList.remove("activado2");
                e.target.classList.add("activado2");
                setIsChecked(!isChecked);
            }else{
                console.log("error")
            }
    
            };
    return (

    <>
    <main className='container-especies'>
        <div className='container-ul'>
            <div>
                <button className='btonv2' onClick={izquierdav2}><FontAwesomeIcon className="iconv2" icon={faArrowLeft}/></button>
            </div>

            <ul className='ulEspecies'>
            <li className='liEspecies activado' id='18'  onClick={click}>Fairy</li>
                <li className='liEspecies' id="20" onClick={click}>Favoritos</li>
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
        <div className="Divlabel">


                <input type="checkbox" id="label" onChange={handleCheckboxClick} checked={isChecked}/>
                <label className='labelEspecie' htmlFor='label'><FontAwesomeIcon icon={faMagnifyingGlass} className='iconEspecies'></FontAwesomeIcon></label>
            
                
                
                
                <ul className='ulEspecies2'>
                <li className='liEspecies2 activado2' id='18' onClick={click2}>Fairy</li>
                <li className='liEspecies2' id="20" onClick={click2}>Favoritos</li>
                <li className="liEspecies2" id='17'   onClick={click2}>Dark</li>
                <li className="liEspecies2" id="16"  onClick={click2}>DRAGON</li>
                <li className="liEspecies2" id='15' onClick={click2}>Ice</li>
                <li className="liEspecies2" id='14' onClick={click2}>PSYCHIC</li>
                <li className="liEspecies2" id='13' onClick={click2}>Electric</li>
                <li className="liEspecies2" id='8'  onClick= {click2}>Ghost</li>
                <li className="liEspecies2" id='7' onClick={click2}>Bug</li>
                <li className="liEspecies2" id='9'  onClick={click2}>Steel</li>
                <li className="liEspecies2" id='12' onClick={click2}>Grass</li>
                <li className="liEspecies2" id='6' onClick={ click2}>Rock</li>
                <li className="liEspecies2" id='5' onClick={click2}>Ground</li>
                <li className="liEspecies2" id='4' onClick={click2}>Poison</li>
                <li className="liEspecies2" id='3' onClick={click2}>Flying</li>
                <li className="liEspecies2" id='2' onClick={click2}>Fighting</li>
                <li className="liEspecies2" id='1' onClick={click2}>Normal</li>
                <li className="liEspecies2" id='11' onClick={click2}>Water</li>
                <li className="liEspecies2" id='10' onClick={click2}>Fire</li>
            </ul>
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
        </>

)
}


export default Especies