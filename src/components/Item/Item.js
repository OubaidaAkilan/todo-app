import React from 'react'
import './Item.scss'
import { Card, Elevation, Icon } from "@blueprintjs/core";
import Auth from '../auth/auth';
import { useContext } from 'react';
import { ListContext } from '../../context/list';
import KToggleButton from './KToggleButton';
export default function Item(props) {
    const list = useContext(ListContext);
    return (
        <div className='item'>
            <Card className='card' interactive={true} elevation={Elevation.TWO}>
                <div className='top'>
                    <div>
                        <span className='status' style={{ backgroundColor: props.item.complete ? '#1B5E20' : '#C62828' }}>{props.item.complete ? 'complete' : 'pending'}</span>
                        <span className='name'>{props.item.assginee}</span>
                    </div>
                    <Auth action={'delete'}>
                        <Icon intent='danger' icon='cross' onClick={() => { list.deleteItem(props.item.id) }}></Icon>
                    </Auth>


                </div>
                <div className='buttom'>
                    <div className="item-details">

                        <p>{props.item.itemDetail}</p>
                        <div >Complete:<KToggleButton item={props.item} /></div>

                    </div>
                    <div className="difficulty">
                        <h6 style={{ color: 'grey' }}>{props.item.difficulty}</h6>
                    </div>

                </div>

            </Card>
        </div>
    )
}
