import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminProvider = props => {

    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isAdminLogged, setIsAdminLogged] = useState(false);
    const [ itemToAdd, setItemToAdd ] = useState({});

    const toAdd = {
        name: "name",
    }

    const handleLoginInput = e => {
        setLogin(e.target.value);
    }

    const handlePasswordInput = e => {
        setPassword(e.target.value);
    }

    const handleLogout = () => {
        setIsAdminLogged(false);
        console.log('Wylogowano');
    }

    const handleLogin = e => {
        e.preventDefault();

        if (login === 'xxx' && password ==='xxx'){
            setIsAdminLogged(true);
            setLogin("");
            setPassword("");
        }else {
            setLogin("");
            setPassword("");
            alert('Niepoprawne dane');
        }
    }

    const storeObject = {
        isAdminLogged,
        password,
        login,
        handleLogin,
        handleLogout,
        handleLoginInput,
        handlePasswordInput
    }

    return(
        <AdminContext.Provider value={storeObject}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminProvider;