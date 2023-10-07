import React from 'react'
import { NavLink } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

function HeaderMenu() {
    return (
        <Header>
            <NavLink 
                to={"/"}
                style={({ isActive }) => ({
                    color: isActive ? "#535bf2": "",
                })}
            >
                Inicio
            </NavLink>
            <NavLink 
                to={"/generate"}
                style={({ isActive }) => ({
                    color: isActive ? "#535bf2": "",
                })}
            >
                Generar
            </NavLink>
            <NavLink 
                to={"/about"}
                style={({ isActive }) => ({
                    color: isActive ? "#535bf2": "",
                })}
            >
                Acerca de
            </NavLink>
        </Header>
    )
}

export { HeaderMenu };