import React, {useContext} from "react";
import { SuperLink, ButtonElement, Icon, MenuWrapper } from "../../styled/styled";

import {language} from '../../language';
import {AppContext} from "../../context/AppContext";
import {LoginContext} from "../../context/LoginContext";


const MenuButtons = () => {

    const { isEnglish, handleChangeLanguage, isMenuOpen, handleMenuOpen } = useContext(AppContext);
    const { isAdminLogged } = useContext(LoginContext);

    const isEnglishText = () => {
        if(isAdminLogged){
            return "Admin"
        }
        return isEnglish ? language.english.login : language.polish.login
    }

    return(
        <MenuWrapper isOpen={isMenuOpen}>
            <ButtonElement onClick={handleMenuOpen} mobile={false}>
                <SuperLink to="/">
                    { isEnglish ? language.english.home : language.polish.home}
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/about">
                    { isEnglish ? language.english.about : language.polish.about}
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/help">
                    { isEnglish ? language.english.help : language.polish.help}
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/login">
                    { isEnglishText() }
                </SuperLink>
            </ButtonElement>

            <ButtonElement>
                <Icon isEnglish={isEnglish} onClick={handleChangeLanguage}/>
            </ButtonElement>

        </MenuWrapper>
    );
}

export default MenuButtons;