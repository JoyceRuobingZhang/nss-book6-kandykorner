import React from 'react'
import {Link} from 'react-router-dom'
import "./NavBar.css"

export const NavBar = () => {
    return (
        <>
        <h1>Kandy Korner</h1>
        <small>Welcome to the 300 Monkey dr location!</small><br/>
        <small>-- Visit our <a href="#">2695 Adams Avenue</a> location!</small>   

        <ul className="navbar">
            <li className="navbar-item">
                <Link key="location" to="./locations">Locations</Link>
            </li>
            <li className="navbar-item">
                <Link key="product" to="./products">Products</Link>
            </li>
            {/* <li>
                <Link key="product" to="./products">Products</Link>
            </li> */}
        </ul>
        </>

    )
}