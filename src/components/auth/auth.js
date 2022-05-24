import React, { useContext } from 'react'

import { When } from 'react-if';
import { LoginContext } from '../../context/login';

export default function Auth(props) {

    const login = useContext(LoginContext);
    return (
        <When condition={login.login && login.canDo(props.action)}>
            {props.children}
        </When>
    )
}
