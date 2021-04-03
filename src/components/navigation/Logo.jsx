import React, {useContext} from 'react';
import styled from "styled-components";
import { SuperLink } from "../../styled/styled";

import {AppContext} from "../../context/AppContext";

const LogoWrapper = styled.p`
  font-size: 36px;
  padding: 20px ;
  font-weight: bold;
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