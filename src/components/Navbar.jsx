import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from "../context/AppContext";

import SearchTool from "./navigation/SearchTool";
import Logo from "./navigation/Logo";
import MenuButtons from "./navigation/MenuButtons.jsx";


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 90px;
`

const Navbar = () => {

    const {isEnglish} = useContext(AppContext);

    return(
        <Wrapper>
            <Logo/>
            <SearchTool/>
            <MenuButtons/>
        </Wrapper>

    );
}

export default Navbar;