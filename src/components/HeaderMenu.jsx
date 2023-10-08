import React from 'react'
import { NavLink } from 'react-router-dom'

import "../styles/HeaderMenu.scss";

import nasa_logo from "../assets/images/nasa_logo.png"
import nasa_app from "../assets/images/nasa_app.png"

function HeaderMenu() {
    return (
        <header>
            <figure>
                <img src={nasa_logo} />
            </figure>
            <div className='header_bar'>
                <NavLink 
                    to={"/"}
                    style={({ isActive }) => ({
                        color: isActive ? "#218E5E": "",
                    })}
                >
                    Home
                </NavLink>
                <NavLink 
                    to={"/about"}
                    style={({ isActive }) => ({
                        color: isActive ? "#218E5E": "",
                    })}
                >
                    About
                </NavLink>
            </div>
            <figure>
                <img src={nasa_app} />
            </figure>
        </header>
    )
}

export { HeaderMenu };