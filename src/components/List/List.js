import React from 'react'
import './list.scss'

import Item from '../Item/Item';
export default function List(props) {
    return (
        <div className='list'>
            {
                props.list.map((item) => {
                    return <Item key={item.id} item={item} toggleComplete={props.toggleComplete} deleteItem={props.deleteItem} />
                })
            }

            {/* <Item />
            <Item />
            <Item /> */}

        </div>
    )
}
