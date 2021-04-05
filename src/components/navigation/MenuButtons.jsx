import React, {useContext} from "react";
import { SuperLink, ButtonElement, Icon, MenuWrapper } from "../../styled/styled";
import styled from "styled-components";

import {language} from '../../language';
import {AppContext} from "../../context/AppContext";


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