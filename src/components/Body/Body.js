import React from 'react'
import Form from '../Form/Form'
import NotifiBar from '../NotificationBar/NotifiBar'
import './Body.scss'

export default function Body() {
    return (
        <div className='Body'>
            <NotifiBar />
            <Form />

        </div>
    )
}
