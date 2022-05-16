import React from 'react'
import './Item.scss'
import { Button, Card, Elevation, Icon } from "@blueprintjs/core";
export default function Item() {
    return (
        <div className='item'>
            <Card className='card' interactive={true} elevation={Elevation.TWO}>
                <div className='top'>
                    <div>
                        <span className='status' style={{ backgroundColor: 'red' }}>pending</span>
                        <span className='name'>name</span>
                    </div>
                    <Icon intent='danger' icon='cross' ></Icon>


                </div>
                <div className='buttom'>
                    <div className="item-details">
                        <p> Card content  </p>
                    </div>
                    <div className="difficulty">
                        <h6 style={{ color: 'grey' }}>Difficulty 5</h6>
                    </div>

                </div>

            </Card>
        </div>
    )
}
