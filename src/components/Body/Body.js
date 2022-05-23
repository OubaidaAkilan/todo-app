import React from 'react'
import Form from '../Form/Form'
import NotifiBar from '../NotificationBar/NotifiBar'
import './Body.scss'

import ListProvider from '../../context/list';
import SettingProvider from '../../context/setting';

export default function Body() {
    return (

        <div className='Body'>
            <SettingProvider>
                <ListProvider>
                    <NotifiBar />
                    <Form />
                </ListProvider>
            </SettingProvider>




        </div>

    )
}
