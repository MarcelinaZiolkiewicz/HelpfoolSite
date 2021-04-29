import React, {useContext, useState} from 'react';
import styled from 'styled-components';

import { AppContext } from "../../context/AppContext";
import { Icon } from "../../styled/styled";
import { language } from "../../language";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 50px;
  padding: 5px 7px;
  background-color: rgba(245, 247, 245, 0.7);
  
  @media(max-width: 420px){
    flex-direction: row;  
  }
`

const Languages = () => {
    const { globalLanguage, handleSetLanguage } = useContext(AppContext);

    const topIcon = () => {
        // console.log('Actual lang: ' + globalLanguage.lang);

        //usememo
        if (globalLanguage.lang === 'PL'){
            return <Icon langImg={language.english.iconPath} onClick={() => handleSetLanguage(2)}/>
        }
        else if (globalLanguage.lang === 'ENG'){
            return <Icon langImg={language.polish.iconPath} onClick={() => handleSetLanguage(1)}/>
        }
        topIcon();
    }

    return(
      <Wrapper>
          {topIcon()}
      </Wrapper>
    );
}

export default Languages;