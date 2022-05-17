import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { v4 as uuid } from 'uuid';
import List from '../List/List'
import './Form.scss'
import { Card, Elevation } from "@blueprintjs/core";

export default function Form() {
    const [list, setList] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    const { handleChange, handleSubmit } = useForm(addItem);

    function addItem(item) {
        console.log(item);
        item.id = uuid();
        item.complete = false;
        setList([...list, item]);
    }

    function deleteItem(id) {
        const items = list.filter(item => item.id !== id);
        setList(items);
    }

    function toggleComplete(id) {

        const items = list.map(item => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        });

        setList(items);

    }

    useEffect(() => {
        let incompleteCount = list.filter(item => !item.complete).length;
        setIncomplete(incompleteCount);
        document.title = `To Do List: ${incomplete}`;
    }, [list]);
    return (
        <div className='form'>

            <Card className='add-item' interactive={false} elevation={Elevation.TWO}>
                <form onSubmit={handleSubmit}>
                    <h3>Add To Do Item</h3>
                    <label className='label-form' htmlFor="">To Do Item</label>
                    <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
                    <label className='label-form' htmlFor="">Assigned To</label>
                    <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
                    <label className='label-form' htmlFor="">Difficulty</label>
                    <input type={'range'} onChange={handleChange} defaultValue={3} min={1} max={5} />
                    <button type='submit'>Add Item</button>
                </form>
            </Card >

            <List list={list} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        </div >
    )
}
