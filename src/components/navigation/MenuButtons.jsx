import React, {useContext} from "react";
import { SuperLink, ButtonElement, Icon, MenuWrapper } from "../../styled/styled";

import {language} from '../../language';
import {AppContext} from "../../context/AppContext";


const MenuButtons = () => {

    const { isEnglish, handleChangeLanguage, isMenuOpen, handleMenuOpen } = useContext(AppContext);

    return(
        <MenuWrapper isOpen={isMenuOpen}>
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
                    { isEnglish ? language.english.login : language.polish.login}
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <Icon isEnglish={isEnglish} onClick={handleChangeLanguage}/>
            </ButtonElement>

        </MenuWrapper>
    );
}

export default MenuButtons;