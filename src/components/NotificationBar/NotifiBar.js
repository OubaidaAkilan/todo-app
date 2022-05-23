import React from 'react'
import { Navbar, Alignment } from "@blueprintjs/core";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { useContext, useEffect, useState } from 'react';
import { ListContext } from '../../context/list';
import { SettingContext } from '../../context/setting';
export default function NotifiBar() {
    const list = useContext(ListContext);
    const setting = useContext(SettingContext);
    const [length, setLength] = useState(0);
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log(event.target.checked);
        setting.setChecked(event.target.checked);
    };

    useEffect(() => {
        // console.log('obieda');
        console.log(list.list);

        let newLength = list.list.filter(item => !item.complete).length;
        setLength(newLength);

    }, [list, checked]);
    return (
        <Navbar className='navbar' style={{ backgroundColor: '#383838' }}>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>To Do List Manager ({length})</Navbar.Heading>
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                show complete
                <Switch
                    checked={setting.checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Navbar.Group>

        </Navbar>
    )
}
