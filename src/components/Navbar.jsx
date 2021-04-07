import React, { useContext } from 'react';

import styled from 'styled-components';

import { AppContext } from "../context/AppContext";

import SearchTool from "./navigation/SearchTool";
import Logo from "./navigation/Logo";
import MenuButtons from "./navigation/MenuButtons.jsx";
import BurgerButton from "./navigation/BurgerButton";


const Wrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 90px;
  
  @media(max-width: 415px){
    //flex-direction: column;
  }
  
`

const Navbar = () => {

    const {isMenuOpen,handleMenuOpen} = useContext(AppContext);

    return(
        <Wrapper>
            <Logo/>
            <SearchTool/>
            <BurgerButton open={isMenuOpen} setOpen={handleMenuOpen}/>
            <MenuButtons/>
        </Wrapper>

    );
}

export default Navbar;