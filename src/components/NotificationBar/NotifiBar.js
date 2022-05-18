import React from 'react'
import { Navbar, Alignment } from "@blueprintjs/core";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/list';
export default function NotifiBar() {
    const list = useContext(ListContext);
    const [length, setLength] = useState(0);

    useEffect(() => {
        console.log('obieda');
        console.log(list.list);
        let newLength = list.list.filter(item => !item.complete).length;
        setLength(newLength);

    }, [list]);
    return (
        <Navbar className='navbar' style={{ backgroundColor: '#383838' }}>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>To Do List Manager ({length})</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => { list.handelCompleteList() }} color='success'>complete</Button>
                    <Button onClick={() => { list.handelInCompleteList() }} color='error'>incomplete</Button>
                </ButtonGroup>
            </Navbar.Group>

        </Navbar>
    )
}
