import { v4 as uuid } from 'uuid';
import List from '../List/List'
import './Form.scss'
import { Card, Elevation } from "@blueprintjs/core";
import Button from '@mui/material/Button';
import { useContext, useRef } from 'react';
import { ListContext } from '../../context/list';

export default function Form() {
    const list = useContext(ListContext);
    const itemDetailRef = useRef();
    const assigneeRef = useRef();
    const difficultyRef = useRef();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const itemDetail = itemDetailRef.current.value;
        const assginee = assigneeRef.current.value;
        const difficulty = difficultyRef.current.value;


        let item = {
            id: uuid(),
            itemDetail: itemDetail,
            assginee: assginee,
            difficulty: difficulty,
            complete: false,
        }
        // console.log({ item });
        list.setList([...list.list, item]);
    }




    return (
        <div className='form'>

            <Card className='add-item' interactive={false} elevation={Elevation.TWO}>
                <form onSubmit={handleSubmit}>
                    <h3>Add To Do Item</h3>
                    <label className='label-form' htmlFor="">To Do Item</label>
                    <input ref={itemDetailRef} name="itemDetail" type="text" placeholder="Item Details" />
                    <label className='label-form' htmlFor="">Assigned To</label>
                    <input ref={assigneeRef} name="assignee" type="text" placeholder="Assignee Name" />
                    <label className='label-form' htmlFor="">Difficulty</label>
                    <input ref={difficultyRef} type={'range'} defaultValue={3} min={1} max={5} />

                    <Button size='small' className='success-btn' variant="contained" type='submit'>Add Item</Button>
                </form>
            </Card >
            {/*  toggleComplete={toggleComplete} deleteItem={deleteItem} */}
            {/* {list.stateList === 'incomplete' ? list.IncompleteList : list.completeList} */}
            <List list={list.stateList === 'incomplete' ? list.list : list.completeList} />
        </div >
    )
}
