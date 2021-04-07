import React, {useContext} from 'react';
import styled from "styled-components";
import { SuperLink } from "../../styled/styled";

import {AppContext} from "../../context/AppContext";

const LogoWrapper = styled.p`
  font-size: 36px;
  padding: 20px ;
  font-weight: bold;
  text-align: left;

  @media(max-width: 415px){
    width: 70vw;
    margin: 0 auto;
  }
`

const Logo = () => {

    const { isDark } = useContext(AppContext);

    return(
        <SuperLink to="/">
            <LogoWrapper>
                Helpfool.
            </LogoWrapper>
        </SuperLink>
    );
}


export default Logo;