import React from 'react'
import Form from '../Form/Form'
import NotifiBar from '../NotificationBar/NotifiBar'
import './Body.scss'

import ListProvider from '../../context/list';

export default function Body() {
    return (

        <div className='Body'>
            <ListProvider>
                <NotifiBar />
                <Form />
            </ListProvider>



        </div>

    )
}
