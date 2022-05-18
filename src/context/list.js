import React from 'react';
import { useState } from "react";

export const ListContext = React.createContext();//used by the consumer


export default function ListProvider(props) {
    const [list, setList] = useState([]);
    const [completeList, setCompleteList] = useState([]);
    const [IncompleteList, setInCompleteList] = useState(list);
    const [stateList, setstateList] = useState('incomplete');

    function handelCompleteList() {
        let listComplete = list.filter((item) => item.complete);
        setCompleteList(listComplete);
        setstateList('complete');
        // setList(listComplete);
        console.log({ listComplete });
    }

    function handelInCompleteList() {
        let listInComplete = list.filter((item) => {

            return !item.complete
        });

        setInCompleteList(listInComplete);
        console.log({ listInComplete });
        // setList(listInComplete);
        setstateList('incomplete');
    }

    function deleteItem(id) {
        let newList = list.filter((item) => !(item.id == id));
        setList(newList);

    }

    function toggleComplete(id) {
        let items = list.map((item) => {
            if (item.id == id) {
                item.complete = !item.complete;
            }
            return item;
        });
        console.log({ items });
        setList(items);
    }

    const state = { list, setList, handelCompleteList, handelInCompleteList, deleteItem, toggleComplete, completeList, IncompleteList, stateList, setInCompleteList };

    return (
        <ListContext.Provider value={state}>
            {props.children}
        </ListContext.Provider>
    )
}
