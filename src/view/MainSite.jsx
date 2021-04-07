import React, {useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from "../context/AppContext";

import {toolsList} from "../toolsList";

import Category from "../components/Category";

const Wrapper = styled.div`
  width: 80vw;
  background-color: #FFFFFF;
  margin: 15vh auto 0 auto;
  
  @media(max-width: 415px){
    width: 100vw;
    margin-top: 5vh;
  }
`

const MainSite = () => {

    const {isEnglish} = useContext(AppContext);

    const items = toolsList.map( item => (
            <Category item={item} />
    ));


    return(
        <Wrapper>
            {items}
        </Wrapper>
    );
}

export default MainSite;