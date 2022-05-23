import React, { useState, useEffect } from "react";

export const SettingContext = React.createContext();

export default function SettingProvider(props) {

    const [checked, setChecked] = useState(true);
    const [noOfItems, setNoOfItems] = useState(3);

    const state = { checked, setChecked, noOfItems, setNoOfItems }

    useEffect(() => {
        let data = localStorage.getItem('setting');
        let parsedData = JSON.parse(data);
        if (parsedData) {
            setChecked(parsedData.checked);
            setNoOfItems(parseInt(parsedData.noOfItems));

        }
    }, [])






    return (
        <SettingContext.Provider value={state}>
            {props.children}
        </SettingContext.Provider>
    )
}