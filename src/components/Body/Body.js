import React, { useContext } from 'react'
import Form from '../Form/Form'
import NotifiBar from '../NotificationBar/NotifiBar'
import './Body.scss'


import ListProvider from '../../context/list';
import SettingProvider from '../../context/setting';
import LoginProvider, { LoginContext } from '../../context/login';
import { When } from 'react-if';
import Login from '../login/login';

export default function Body() {
    const login = useContext(LoginContext);
    return (
        <div className='Body'>
            <When condition={login.loggedIn}>
                <SettingProvider>
                    <ListProvider>
                        <NotifiBar />
                        <Form />
                    </ListProvider>
                </SettingProvider>
            </When>
            <When condition={!login.loggedIn}>
                <Login />
            </When>
        </div>
    )
}
