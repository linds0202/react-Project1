import React from 'react'
import reactLogo from '../assets/react.svg'

export default function Navbar () {
    return (
        <nav>
            <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="nav--icon" alt="React logo" />
            </a>
            <h3 className="nav--logo_text">React Facts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}