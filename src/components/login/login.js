import React, { useContext, useState } from 'react'
import SettingProvider from '../../context/setting';
import LoginProvider, { LoginContext } from '../../context/login';


export default function Login() {
    const login = useContext(LoginContext);
    const [username, setUserName] = useState();
    const [pwd, setPwd] = useState();

    const handelLogin = (e) => {
        e.preventDefault();
        login.login(username, pwd);
    }

    const handelSignUp = (e) => {
        e.preventDefault();
        login.signUp(username, pwd);
    }

    return (
        <div >
            <form onSubmit={handelSignUp}>
                <input type="text" placeholder='userName' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} />
                <input type="submit" value={'signUp'} />
            </form>
            <form onSubmit={handelLogin}>
                <input type="text" placeholder='userName' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} />
                <input type="submit" value={'login'} />
            </form>
        </div>
    )
}
