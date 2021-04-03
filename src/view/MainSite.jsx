import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from "../context/AppContext";

import {language} from "../language";
import {toolsList} from "../toolsList";

import Category from "../components/Category";

const Wrapper = styled.div`
  width: 80vw;
  background-color: #FFFFFF;
  margin: 15vh auto 0 auto;
`

const MainSite = () => {

    const {isEnglish} = useContext(AppContext);

    const items = toolsList.map( item => (
            <Category item={item} />
    ));


    return(
        <Wrapper>
            {/*<CategoryText>{isEnglish ? language.english.designLabel : language.polish.designLabel}</CategoryText>*/}
            {items}
        </Wrapper>
    );
}

export default MainSite;