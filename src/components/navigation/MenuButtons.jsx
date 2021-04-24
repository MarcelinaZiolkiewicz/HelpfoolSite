import React, {useContext} from "react";
import { SuperLink, ButtonElement, Icon, MenuWrapper } from "../../styled/styled";

import {language} from '../../language';
import {AppContext} from "../../context/AppContext";
import {AdminContext} from "../../context/AdminContext";
import Languages from "./Languages";


const MenuButtons = () => {

    const { globalLanguage, isMenuOpen, handleMenuOpen } = useContext(AppContext);
    const { isAdminLogged } = useContext(AdminContext);

    const isEnglishText = () => {
        if(isAdminLogged){
            return "Admin"
        }
        return globalLanguage.login
    }

    return(
        <MenuWrapper isOpen={isMenuOpen}>
            <ButtonElement onClick={handleMenuOpen} mobile={false}>
                <SuperLink to="/">
                    { globalLanguage.home }
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/about">
                    { globalLanguage.about }
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/help">
                    { globalLanguage.help }
                </SuperLink>
            </ButtonElement>

            <ButtonElement onClick={handleMenuOpen}>
                <SuperLink to="/login">
                    { isEnglishText() }
                </SuperLink>
            </ButtonElement>


                {/*<Icon langImg={globalLanguage.iconPath} onClick={handleChangeLanguage}/>*/}
                <Languages/>


        </MenuWrapper>
    );
}

export default MenuButtons;