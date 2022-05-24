import React, { useContext, useState } from 'react'
import SettingProvider from '../../context/setting';
import LoginProvider, { LoginContext } from '../../context/login';
import './login.scss'


export default function Login() {
    const login = useContext(LoginContext);
    const [username, setUserName] = useState();
    const [pwd, setPwd] = useState();
    const [role, setRole] = useState();

    const handelLogin = (e) => {
        e.preventDefault();
        login.login(username, pwd);
    }

    const handelSignUp = (e) => {
        e.preventDefault();
        login.signUp(username, pwd, role);
    }



    return (
        <div >
            <form onSubmit={handelSignUp}>
                <input type="text" placeholder='userName' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} />
                <select name="role" onChange={(e) => setRole(e.target.value)} >
                    <option value='' >role</option>
                    <option value='user'>user</option>
                    <option value='admin'>admin</option>
                    <option value='writer'>writer</option>
                    <option value='editor'>editor</option>
                </select>
                <input type="submit" value={'signUp'} />
            </form>
            <br />
            <form onSubmit={handelLogin}>
                <input type="text" placeholder='userName' onChange={(e) => setUserName(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPwd(e.target.value)} />
                <input type="submit" value={'login'} />
            </form>
        </div>
    )
}
