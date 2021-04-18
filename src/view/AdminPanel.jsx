import React, { useContext, useState } from "react";
import styled from "styled-components";

import {Redirect, Route} from "react-router-dom";
import {LoginContext} from "../context/LoginContext";
import AddNewProgram from "../components/administartorPanel/AddNewProgram";
import Header from "../components/administartorPanel/Header";


const Wrapper = styled.div`
  width: 85vw;
  margin: 5vh auto 0 auto;
`

const AdminPanel = () => {

    const { isAdminLogged } = useContext(LoginContext);

    return(
        <div>
            <Route render={() => (
                isAdminLogged ? null : <Redirect to="/login"/>
            )}/>

            <Wrapper>
                <Header/>
                <AddNewProgram/>
            </Wrapper>

        </div>
    )
}

export default AdminPanel;