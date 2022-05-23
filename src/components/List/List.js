import React from 'react'
import { useEffect, useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import './list.scss'
import { SettingContext } from '../../context/setting'


import Item from '../Item/Item';
export default function List(props) {
    const setting = useContext(SettingContext);






    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <Item key={item.id} item={item} />
                    ))}
            </>
        );
    }





    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // const [itemsPerPage, setItemsPerPage] = useState(3);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            console.log(`Loading items from ${itemOffset} to ${endOffset}`);
            setCurrentItems(props.list.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(props.list.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % props.list.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };


        return (
            <>

                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }

    return (
        <div className='list'>

            <PaginatedItems itemsPerPage={setting.noOfItems} />
        </div>


    )
}
