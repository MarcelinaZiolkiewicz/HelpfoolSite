import React, { useContext, useState } from "react";
import styled from "styled-components";

import {Redirect, Route} from "react-router-dom";
import {LoginContext} from "../context/LoginContext";


const Wrapper = styled.div`
  width: 85vw;
  background-color: #ddd;
  margin: 0 auto;
`

const AdminPanel = () => {

    const { isAdminLogged, handleLogout } = useContext(LoginContext);

    return(
        <div>
            <Route render={() => (
                isAdminLogged ? null : <Redirect to="/login"/>
            )}/>

            <Wrapper>
                <h3>Panel Administratora</h3>
                <button onClick={handleLogout}>Logout</button>
            </Wrapper>

        </div>
    )
}

export default AdminPanel;