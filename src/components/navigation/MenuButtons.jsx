import React from "react";
import { SuperLink } from "../../styled/styled";
import styled from "styled-components";

const MenuWrapper = styled.ul`
  padding: 10px 20px;
`

const ButtonElement = styled.li`
  display: inline-block;
  padding: 10px 20px;
  font-size: 20px;
  transition: .3s;
  
  &:hover{
    transform: scale(1.2);
  }
`

const MenuButtons = () => {
    return(
        <MenuWrapper>
            <ButtonElement>
                <SuperLink to="/about">
                    About
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <SuperLink to="/help">
                    Help us
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <SuperLink to="/login">
                    Log in
                </SuperLink>
            </ButtonElement>

        </MenuWrapper>
    );
}

export default MenuButtons;