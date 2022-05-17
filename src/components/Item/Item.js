import React from 'react'
import './Item.scss'
import { Button, Card, Elevation, Icon } from "@blueprintjs/core";
export default function Item(props) {
    return (
        <div className='item'>
            <Card className='card' interactive={true} elevation={Elevation.TWO}>
                <div className='top'>
                    <div>
                        <span className='status' style={{ backgroundColor: 'red' }}>pending</span>
                        <span className='name'>{props.item.assignee}</span>
                    </div>
                    <Icon intent='danger' icon='cross' onClick={() => { props.deleteItem(props.item.id) }}></Icon>


                </div>
                <div className='buttom'>
                    <div className="item-details">
                        <p> Card content  </p>
                        <div onClick={() => props.toggleComplete(props.item.id)}>Complete: {props.item.complete.toString()}</div>
                    </div>
                    <div className="difficulty">
                        <h6 style={{ color: 'grey' }}>{props.item.difficulty}</h6>
                    </div>

                </div>

            </Card>
        </div>
    )
}
