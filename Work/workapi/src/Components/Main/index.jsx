import React, { useContext, useEffect, useState } from 'react'
import "./estilos.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons"
import pokebola2 from "./../../Assets/pokebola2.png"
import pokebola3 from "./../../Assets/pokebola3.png"
import pokebol4 from "./../../Assets/superball.png"
import { Use } from '../../Context/Usecontext'
import Header from '../Header'
const Main = () => {

    const {cambiarPage, page, Img, setPage, AllPokemons, obtener, habilidades, Stats, botones, subir, Moves, estado, buscarpokemon, scrollMas, scrollMenos , buscar, seccionM, seccionC, seccionS, seccionH, SeccionCaract, SeccionMove,SeccionStats,SeccionHabilidades, cambiar, animation, setAnimation } = useContext(Use)


useEffect(()=>{
    AllPokemons()
},[])


    return (
    <div>
    {
        obtener.length === 0

        ?
        null

        :
    <>
    {
        page === false

        ?
            <div className='body'>
                <h1>Bienvenido a la pokedex!!!!</h1>
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
                <h1>Bienvenido a la pokedex!!!!</h1>
                <button onClick={() => setPage(true)} onMouseEnter={() => setAnimation(false)}id="bton" className='boton'><p>Ingresar</p><FontAwesomeIcon className='icon' icon={faArrowRight}/></button>
            </div>

            <body> 
                <div className='container'>
                {/*--
                <header>
                    <h1>Pokedex</h1>
                    {
                        Img === false
                        ?
                        <div className="PosicionImg">
                            <img src={pokebola}></img>
                        </div>
                        :
                        <div className="PosicionImg2">
                            <img src={pokebola}></img>
                        </div>

                    }

                    <nav>
                        <ul>
                            <NavLink to="/todos"><li>Todos</li></NavLink>
                            <NavLink to="/especies"><li>Especies</li></NavLink>
                        </ul>
                    </nav>
                </header>
                --*/}
                <Header/>
                


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
                                    <img src={estado.img} alt={estado.id} />
                                </div>


                                <div className="DivcaractFlex">
                                
                                        <ul>
                                            <p onClick={seccionC} className='liOpciones activo'>Caracteristcas</p>
                                            <p onClick={seccionM} className='liOpciones'>Moves</p>
                                            <p onClick={seccionS} className='liOpciones'>stats</p>
                                            <p onClick={seccionH} className='liOpciones'>Hablidades</p>
                                        </ul>





                                    {
                                    SeccionMove === true
                                    ?
                                    <div className='lista'>
                                        <p className='ul'>
                                        {
                                        Moves.map((Moves)=>{
                                            return(
                                                <li>
                                                    <img src={pokebola2}></img>{Moves.move}
                                                </li>
                                            )
                                        })}
                                        </p>
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