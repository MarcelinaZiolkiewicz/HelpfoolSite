import React, {useContext} from "react";
import { SuperLink, Icon } from "../../styled/styled";
import styled from "styled-components";

import {language} from '../../language';
import {AppContext} from "../../context/AppContext";

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
`

const ButtonElement = styled.li`
  list-style: none;
  padding: 10px 20px;
  font-size: 20px;
  transition: .3s;
  
  &:hover{
    transform: scale(1.2);
  }
`

const MenuButtons = () => {

    const { isEnglish, handleChangeLanguage } = useContext(AppContext);

    return(
        <MenuWrapper>
            <ButtonElement>
                <SuperLink to="/about">
                    { isEnglish ? language.english.about : language.polish.about}
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <SuperLink to="/help">
                    { isEnglish ? language.english.help : language.polish.help}
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <SuperLink to="/login">
                    { isEnglish ? language.english.login : language.polish.login}
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <Icon isEnglish={isEnglish} onClick={handleChangeLanguage}/>
            </ButtonElement>

        </MenuWrapper>
    );
}

export default MenuButtons;