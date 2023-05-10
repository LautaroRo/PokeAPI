import React from 'react'
import "./estilos.css"
import pokebola from "./../../Assets/pokebola.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
    
    return (
    <header>
        <h1>Pokedex</h1>

                <div className="PosicionImg">
            <img src={pokebola}></img>
            </div>

        <nav>
            <ul>
                <NavLink to="/todos"><li>Todos</li></NavLink>
                <NavLink to="/especies"><li>Especies</li></NavLink>
            </ul>
        </nav>
    </header>
    )
}

export default Header