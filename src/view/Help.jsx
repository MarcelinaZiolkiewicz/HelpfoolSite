import React, {useContext} from 'react';
import styled from "styled-components";
import { SubpagesWrapper, Label, InfoText } from '../styled/styled';

import {AppContext} from "../context/AppContext";

const Link = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 22px;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border: 2px solid black;
  transition: .3s;
  
  &:hover{
    background-color: black;
    color: white;
  }
`

const StyledLi = styled.li`
  list-style: none;
`

const Help = () => {

    const { globalLanguage } = useContext(AppContext);

    return(
        <SubpagesWrapper>
            <Label>{globalLanguage.Help.helpLabel}</Label>
            <InfoText>{globalLanguage.Help.helpWithSite}</InfoText>
        <InfoText>{globalLanguage.Help.helpWithTranslation} </InfoText>
            <ul>
                <StyledLi>
                    <Link href="https://github.com/MichalZiolkiewicz/HelpfoolSite" target="_blank">
                        {globalLanguage.Help.buttonGit }
                    </Link>
                </StyledLi>

                <StyledLi>
                    <Link href="https://trello.com/b/2HJNnt6T/helpfool" target="_blank">
                        {globalLanguage.Help.buttonTrello }
                    </Link>
                </StyledLi>
            </ul>


        </SubpagesWrapper>
    );
}

export default Help;
