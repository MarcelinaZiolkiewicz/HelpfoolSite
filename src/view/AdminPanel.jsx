import React, { useContext, useState } from "react";
import styled from "styled-components";

import {Redirect, Route} from "react-router-dom";
import {AdminContext} from "../context/AdminContext";
import AddNewProgram from "../components/administartorPanel/AddNewProgram";
import Header from "../components/administartorPanel/Header";
import AdminButtons from "../components/administartorPanel/AdminButtons";
import Preview from "../components/administartorPanel/Preview";


const Wrapper = styled.div`
  width: 85vw;
  margin: 5vh auto 0 auto;
`

const AdminPanel = () => {

    const { isAdminLogged } = useContext(AdminContext);

    return(
        <div>
            <Route render={() => (
                isAdminLogged ? null : <Redirect to="/login"/>
            )}/>

            <Wrapper>
                <Header/>
                <AdminButtons/>
                <AddNewProgram/>
            </Wrapper>

        </div>
    )
}

export default AdminPanel;