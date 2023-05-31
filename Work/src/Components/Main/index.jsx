import React, { useContext, useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUp, faArrowDown, faHeart} from "@fortawesome/free-solid-svg-icons"
import pokebola2 from "./../../Assets/pokebola2.png"
import pokebola3 from "./../../Assets/pokebola3.png"
import pokebol4 from "./../../Assets/superball.png"
import { Use } from '../../Context/Usecontext'

const Main = () => {

    const {cambiarPage, page, setPage, AllPokemons, obtener, habilidades, Stats, botones, subir, Moves, estado, scrollMas, scrollMenos , buscar, seccionM, seccionC, seccionS, seccionH, SeccionCaract, SeccionMove,SeccionStats,SeccionHabilidades, cambiar, animation, setAnimation, pregunta, marcar, setEstado, CambiarButons } = useContext(Use)

    const [count, setCount] = useState(0)
    useEffect(()=>{

        setCount(count + 1)
        if(count === 0){
            const body = document.querySelector(".body2")
                body?.classList?.add("none")
        }
    },[page])



useEffect(()=>{
        AllPokemons()
        setEstado([])
},[])

    return (
    <div>
    {
        obtener.length === 0

        ?
        <div className='backgraoundLoading'>

        </div>

        :
    <>
    {
        page === false

        ?
            <div className='body'>
                {
                    animation === false
                    ?

                    <button onClick={cambiarPage} onMouseLeave={cambiar}id="bton" className='boton'><p>Ingresar</p><FontAwesomeIcon className='icon' icon={faArrowRight}/></button>
                    :
                    <button onClick={cambiarPage} onMouseEnter={() => setAnimation(false)}id="bton" className='Salir'><p>Ingresar</p><FontAwesomeIcon className='icon' icon={faArrowRight}/></button>
                }

            </div>
        :





        <>
            <div className='body2'>
                <button onClick={() => setPage(true)} onMouseEnter={() => setAnimation(false)}id="bton" className='boton'><p>Ingresar</p><FontAwesomeIcon className='icon' icon={faArrowRight}/></button>
            </div>

            <body> 
                <div className='container'>
                

                    <div className="PosicionForm">
                        <div className="form">
                                <input name="nombre" className='input' onChange={subir}></input>
                                <label className="lbl-nombre">
                                <span className='text-nomb'>
                                Ingresar Pokemon
                                </span>
                            </label>
                        </div>
                        <div onClick={buscar} className="search-list" id ="search-list" >

                        </div>
                        {
                            botones === false
                            ?
                            null
                            :
                            <div className='posicionBtones'>
                                <button className='bton1' onClick={scrollMas}><FontAwesomeIcon icon={faArrowDown}/></button>
                                <button className='bton2'onClick={scrollMenos}><FontAwesomeIcon icon={faArrowUp}/></button>
                            </div>
                        }



                        <main className='containerIndex'>
                            <div className="index">
                                <div className='card1'>
                                    {estado.length < 1
                                    ?
                                    <img src={pregunta} alt={estado.id} />
                                    :
                                    <div className='PosicionMarco'>
                                        <img src={estado.img} alt={estado.id} />
                                            {
                                                CambiarButons === false
                                                ?
                                                    <FontAwesomeIcon onClick={marcar} className='PosicionHeart' icon={faHeart}/>
                                                :
                                                    <FontAwesomeIcon onClick={marcar} className='PosicionHeart2' icon={faHeart}/>
                                            }
                                            
                                    </div>
                                    
                                    
                                    }
                                    
                                </div>


                                <div className="DivcaractFlex">
                                
                                        <ul>
                                            <li onClick={seccionC} className='liOpciones activo'>Caracteristcas</li>
                                            <li onClick={seccionM} className='liOpciones'>Moves</li>
                                            <li onClick={seccionS} className='liOpciones'>stats</li>
                                            <li onClick={seccionH} className='liOpciones'>Hablidades</li>
                                        </ul>





                                    {
                                    SeccionMove === true
                                    ?
                                    <div className='lista'>
                                        <ul className='ul'>
                                        {
                                        Moves.map((Moves)=>{
                                            return(
                                                <li>
                                                    <img src={pokebola2}></img>{Moves.move}
                                                </li>
                                            )
                                        })}
                                        </ul>
                                    </div>
                                    :
                                        null
                                
                                    }






                                    {
                                    SeccionCaract === true
                                    ?
                                    <ul className='Caracteristicas-ul'>
                                        <li><img src={pokebola3} alt="" /><span>Nombre:</span> {estado.nombre}</li>
                                        <li><img src={pokebola3} alt="" /><span>id:</span> {estado.id}</li>
                                        <li><img src={pokebola3} alt="" /><span>Peso:</span> {estado.weight}</li>
                                        <li><img src={pokebola3} alt="" /><span>Tipo:</span> {estado.especie}</li>
                                        <li><img src={pokebola3} alt="" /><span>Tamaño:</span> {estado.height}</li>
                                    </ul>
                                    :
                                    null
                                    }







                                    {
                                        SeccionStats === true
                                        ?
                                        <>
                                        {
                                            Stats.map((stat)=>{
                                                return(
                                                <ul className='Caracteristicas-ul-stat'>
                                                    <li><img src={stat.img}></img><span>{stat.statN}:</span> {stat.valorS}</li>
                                                </ul>
                                                )
                                            })
                                        }
                                        </>
                                        :
                                        null
                                    }      
                                    

                                    {
                                        SeccionHabilidades === true
                                        ?
                                        <>
                                            {habilidades.map((habil)=>{
                                                return(
                                                <ul className='Caracteristicas-ul'>
                                                    <li><img src={pokebol4}></img><span>Habilidad:</span> {habil.name}</li>
                                                </ul>
                                                )
                                            })}

                                        </>
                                        :
                                        null
                                    }
                                    
                                </div>
                            </div>
                        </main>
                    </div>
            </div>
        </body>
        </>

    }
</>
}
</div>
)
}

export default Main