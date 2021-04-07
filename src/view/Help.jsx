import React, {useContext} from 'react';
import styled from "styled-components";
import { SubpagesWrapper, Label, InfoText } from '../styled/styled';

import {AppContext} from "../context/AppContext";
import { language } from '../language';

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

    const { isEnglish } = useContext(AppContext);

    return(
        <SubpagesWrapper>
            <Label>{isEnglish ? language.english.Help.helpLabel : language.polish.Help.helpLabel }</Label>
            <InfoText>{isEnglish ? language.english.Help.helpWithSite : language.polish.Help.helpWithSite }</InfoText>
        <InfoText>{isEnglish ? language.english.Help.helpWithTranslation : language.polish.Help.helpWithTranslation } </InfoText>
            <ul>
                <StyledLi>
                    <Link href="https://github.com/MichalZiolkiewicz/HelpfoolSite" target="_blank">
                        {isEnglish ? language.english.Help.buttonGit : language.polish.Help.buttonGit }
                    </Link>
                </StyledLi>

                <StyledLi>
                    <Link href="https://trello.com/b/2HJNnt6T/helpfool" target="_blank">
                        {isEnglish ? language.english.Help.buttonTrello : language.polish.Help.buttonTrello }
                    </Link>
                </StyledLi>
            </ul>


        </SubpagesWrapper>
    );
}

export default Help;
