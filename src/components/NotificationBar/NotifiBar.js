import React from 'react'
import { Navbar, Alignment } from "@blueprintjs/core";
export default function NotifiBar() {
    return (
        <Navbar className='navbar'>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>To Do List Manager (7)</Navbar.Heading>
            </Navbar.Group>
        </Navbar>
    )
}
