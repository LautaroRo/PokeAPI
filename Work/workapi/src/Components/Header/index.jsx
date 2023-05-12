import React, { useState } from 'react'
import "./estilos.css"
import pokebola from "./../../Assets/pokebola.png"
import { NavLink } from 'react-router-dom'
function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = (e) => {
        setIsChecked(!isChecked);

        document.querySelector(".activado").classList?.remove("activado")
        e.target.classList?.add("activado")
    };

return (
    <header>
        <nav>
            <input className='inputHeader' type="checkbox" id="input" checked={isChecked} onChange={handleCheckboxClick}/>
            <label className='lbl-header' htmlFor="input">
                <img src={pokebola} alt="Pokebola" />
            </label>
            <ul>
            <li className='liHeader activado' onClick={handleCheckboxClick}>
                    <NavLink className="liNav" to="/">
                        <span>Inicio</span>
                    </NavLink>
            </li>
                <li className='liHeader' onClick={handleCheckboxClick}>
                    
                        <NavLink className="liNav" to="/todos">
                            <span>Todos</span>
                        </NavLink>

                </li>
                <li className='liHeader' onClick={handleCheckboxClick}>
                    
                        <NavLink className="liNav" to="/especies">
                            <span>Especies</span>
                        </NavLink>
                </li>

            </ul>
        </nav>
    </header>
    );
}

export default Header