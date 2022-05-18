

import React, { useContext } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';
import { ListContext } from '../../context/list';

export default function KToggleButton(props) {
    const [selected, setSelected] = React.useState(false);
    const list = useContext(ListContext);
    return (
        <ToggleButton value="check" selected={selected} color={props.item.complete === true ? 'primary' : 'error'} style={{ width: '10px', height: '10px' }} size='small'
            onChange={() => {
                setSelected(!selected);
                list.toggleComplete(props.item.id);
            }}>
            {/* {console.log(list.list)} */}
            <CheckIcon style={{ width: '15px', height: '15px' }} size='small' />
        </ToggleButton>
    )
}


