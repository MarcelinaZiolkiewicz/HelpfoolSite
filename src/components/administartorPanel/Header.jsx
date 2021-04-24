import React, {useContext} from "react";
import styled from "styled-components";

import {AdminContext} from "../../context/AdminContext";
import {AppContext} from "../../context/AppContext";


const Text = styled.h3`
  display: inline-block;
  font-size: 28px;
  color: black;
  padding: 5px 10px;
`

const Logout = styled.button`
  font-family: 'Lexend', sans-serif;
  font-weight: bolder;
  display: inline-block;
  float: right;
  margin: 10px 10px;
  background-color: transparent;
  border: 2px solid black;
  font-size: 16px;
  padding: 5px 10px;
  transition: .3s;
  
  &:hover{
    background-color: #ff5e57;
    color: white;
  }
`

const Header = () => {

    const { handleLogout } = useContext(AdminContext);
    const { globalLanguage } = useContext(AppContext);

    return(
        <div>
            <Text>{globalLanguage.Admin.adminLabel}</Text>
            <Logout onClick={handleLogout}>{globalLanguage.Admin.logout}</Logout>
        </div>
    )
}

export default Header;