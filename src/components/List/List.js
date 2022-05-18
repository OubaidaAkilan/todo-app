import React from 'react'
import './list.scss'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';

import Item from '../Item/Item';
export default function List(props) {
    return (
        <div className='list'>
            {
                props.list.map((item) => {

                    return <Item key={item.id} item={item} />
                })
            }
            {/* <Stack spacing={2}>


                <Pagination count={10} color="primary"

                />

            </Stack> */}


        </div>
    )
}
