import React from 'react'
import List from '../List/List'
import './Form.scss'
import { Card, Elevation } from "@blueprintjs/core";

export default function Form() {
    return (
        <div className='form'>

            <Card className='add-item' interactive={false} elevation={Elevation.TWO}>
                <h3>Add To Do Item</h3>
                <label className='label-form' htmlFor="">To Do Item</label>
                <input type={'text'}></input>
                <label className='label-form' htmlFor="">Assigned To</label>
                <input type={'text'}></input>
                <label className='label-form' htmlFor="">Difficulty</label>
                <input type={'range'}></input>
                <button className='success-btn'>Add Item</button>



            </Card >

            <List />
        </div >
    )
}
