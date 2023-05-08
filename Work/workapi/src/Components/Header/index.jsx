import React from 'react'
import "./estilos.css"
import Usecontext, { Use } from '../../Context/Usecontext'
import pokebola from "./../../Assets/pokebola.png"
import { NavLink } from 'react-router-dom'
const Header = () => {
    const { Img} = Usecontext(Use)
    return (
    <header>
        <h1>Pokedex</h1>

                <div className="PosicionImg2">
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