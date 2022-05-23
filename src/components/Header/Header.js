import React, { useContext } from 'react'
import './Header.scss'
import { Navbar, Alignment } from "@blueprintjs/core";
import LoginProvider, { LoginContext } from '../../context/login';
import { When } from 'react-if';

export default function Header() {
    const login = useContext(LoginContext);
    return (
        <div className='header'>
            <Navbar className='navbar'>
                <Navbar.Group align={Alignment.LEFT}>
                    <Navbar.Heading>ToDo</Navbar.Heading>
                </Navbar.Group>
                <When condition={login.loggedIn}>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <button onClick={login.logout}>logout</button>
                    </Navbar.Group>
                </When>

            </Navbar>
        </div >
    )
}
