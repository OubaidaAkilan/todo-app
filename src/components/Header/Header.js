import React from 'react'
import './Header.scss'
import { Navbar, Alignment } from "@blueprintjs/core";

export default function Header() {
    return (
        <div className='header'>
            <Navbar className='navbar'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>ToDo</Navbar.Heading>
                </Navbar.Group>
            </Navbar>
        </div >
    )
}
