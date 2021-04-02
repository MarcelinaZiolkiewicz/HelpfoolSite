import React from 'react';
import styled from "styled-components";
import { SuperLink } from "../../styled/styled";

const LogoWrapper = styled.p`
  font-size: 36px;
  padding: 20px ;
`

const Logo = () => {
    return(
        <SuperLink to="/">
            <LogoWrapper>
                Helpfool.
            </LogoWrapper>
        </SuperLink>
    );
}


export default Logo;