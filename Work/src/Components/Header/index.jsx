import React, { useState } from 'react'
import "./estilos.css"
import pokebola from "./../../Assets/pokebola.png"
import { NavLink } from 'react-router-dom'
function Header() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxClick = (e) => {
        setIsChecked(!isChecked);
    };

return (
    <header>
        <nav>
            <input className='inputHeader' type="checkbox" id="input" checked={isChecked} onChange={handleCheckboxClick}/>
            <label className='lbl-header' htmlFor="input">
                <img src={pokebola} alt="Pokebola" />
            </label>
            <ul>
            <li className='liHeader'>
                    <NavLink className={({isActive}) => isActive ? "active" : 'liNav'} to="/" onClick={handleCheckboxClick}>
                    Inicio
                    </NavLink>
            </li>
                <li className='liHeader'>
                    
                        <NavLink onClick={handleCheckboxClick} className={({isActive}) => isActive ? "active" : 'liNav'} to="/especies">
                            Especies
                        </NavLink>
                </li>

            </ul>
        </nav>
    </header>
    );
}

export default Header