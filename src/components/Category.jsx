import React, { useContext } from "react";
import styled from "styled-components";

import SingleItemGrid from "./SingleItemGrid";
import {AppContext} from "../context/AppContext";


const CategoryText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 20px;
  
  @media(max-width: 730px){
    font-size: 28px;
    padding: 20px 10px;
  }
`

const Wrapper = styled.div`
  padding: 10px 20px;
  
  @media(max-width: 730px){
    padding: unset;
  }
`

const Category = ({item}) => {

    const { globalLanguage } = useContext(AppContext);

    const langType = item => {
        if (globalLanguage.lang === 'PL') return item.typePL
        else if(globalLanguage.lang === 'ENG') return item.typeENG
    }

    const things = item.tools.map(thing => (
          <SingleItemGrid item={thing}/>
        )
    );

    return(
        <Wrapper>
            <CategoryText>{langType(item)}</CategoryText>
            <ul>
                {things}
            </ul>
        </Wrapper>
    );
}

export default Category;