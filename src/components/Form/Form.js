import { v4 as uuid } from 'uuid';
import List from '../List/List'
import './Form.scss'
import { Card, Elevation } from "@blueprintjs/core";
import Button from '@mui/material/Button';
import { useContext, useRef } from 'react';
import { ListContext } from '../../context/list';
import { SettingContext } from '../../context/setting';
import { LoginContext } from '../../context/login';
import Auth from '../auth/auth';
export default function Form() {
    const list = useContext(ListContext);
    const setting = useContext(SettingContext);
    const login = useContext(LoginContext);
    const itemDetailRef = useRef();
    const assigneeRef = useRef();
    const difficultyRef = useRef();
    const noOfItemsRef = useRef();

    function saveToLocalStorage() {
        console.log({ setting });
        localStorage.setItem('setting', JSON.stringify(setting));
    }

    function handelChange(e) {
        setting.setNoOfItems(e.target.value);
        console.log(setting.noOfItems);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        const itemDetail = itemDetailRef.current.value;
        const assginee = assigneeRef.current.value;
        const difficulty = difficultyRef.current.value;
        // const noOfItems = noOfItemsRef.current.value;



        // console.log({ noOfItems });
        // setting.setNoOfItems(noOfItems);

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
                    <Auth action={'create'}>
                        <h3>Add To Do Item</h3>
                        <label className='label-form' htmlFor="">To Do Item</label>
                        <input ref={itemDetailRef} name="itemDetail" type="text" placeholder="Item Details" />
                        <label className='label-form' htmlFor="">Assigned To</label>
                        <input ref={assigneeRef} name="assignee" type="text" placeholder="Assignee Name" />
                        <label className='label-form' htmlFor="">Difficulty</label>
                        <input ref={difficultyRef} type={'range'} defaultValue={3} min={1} max={5} />
                        <label className='label-form' htmlFor="">No. of items</label>
                        <input ref={noOfItemsRef} type={'number'} onChange={handelChange} />
                        <Button size='small' className='success-btn' variant="contained" type='submit'>Add Item</Button>
                    </Auth>
                    <br />
                    <Button size='small' className='success-btn' variant="contained" onClick={saveToLocalStorage}>save to localStorage</Button>
                </form>
            </Card >
            {/*  toggleComplete={toggleComplete} deleteItem={deleteItem} */}
            {/* {list.stateList === 'incomplete' ? list.IncompleteList : list.completeList} */}
            <List list={setting.checked ? list.list : list.list.filter(item => !item.complete)} />
        </div >
    )
}
