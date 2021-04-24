import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminProvider = props => {

    const [ login, setLogin ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ isAdminLogged, setIsAdminLogged] = useState(true);

    const [ addVisible, setAddVisible ] = useState(true);
    const [ previewVisible, setPreviewVisible ] = useState(true);
    // const [ addVisible, setAddVisible ] = useState(false);


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

        if (login === 'asd' && password ==='asd'){
            setIsAdminLogged(true);
            setLogin("");
            setPassword("");
        }else {
            setLogin("");
            setPassword("");
            alert('Niepoprawne dane');
        }
    }

    const handleAddVisible = option => {
        console.log('działa' + option);

        switch (option) {
            case 1:
                setAddVisible(!addVisible);
                break;
            case 2:
                setPreviewVisible(!previewVisible);
                break;
            case 3:
                console.log('jeszcze nie ma');
                break;
            default:
                console.log('Błędna wartość');
                break;
        }
    }

    const storeObject = {
        isAdminLogged,
        password,
        login,
        addVisible,
        previewVisible,
        handleLogin,
        handleLogout,
        handleLoginInput,
        handlePasswordInput,
        handleAddVisible
    }

    return(
        <AdminContext.Provider value={storeObject}>
            {props.children}
        </AdminContext.Provider>
    );
}

export default AdminProvider;