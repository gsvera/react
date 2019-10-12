import React from 'react'
import {NavLink} from 'react-router-dom'
const Menu = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <div className="s-cols-4 lg-cols-1 s-cross-center">
                <NavLink to="/">
                    <img className="main-logo" src="https://ed.team/static/images/logo.svg" alt="Logo EDteam" />
                </NavLink>
            </div>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <nav className="main-menu" id="main-menu">
                    <ul>
                        <li><NavLink to="/" activeClassName="activo">Inicio</NavLink></li>
                        <li><NavLink to="/cursos" activeClassName="activo">Cursos</NavLink></li>
                        <li><NavLink to="/Formulario" activeClassName="activo">Formulario</NavLink></li>
                        <li><NavLink to="/usuarios" activeClassName="activo">Usuarios</NavLink></li>
                    </ul>
                </nav>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>
)

export default Menu