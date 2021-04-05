import React, { useContext } from "react";
import styled from "styled-components";
import SingleItemGrid from "./SingleItemGrid";
import {AppContext} from "../context/AppContext";


const CategoryText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 20px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  
  @media(max-width: 415px){
    padding: unset;
  }
`

const Category = ({item}) => {

    const { isEnglish } = useContext(AppContext);

    const things = item.tools.map(thing => (
          <SingleItemGrid item={thing}/>
        )
    );

    return(
        <Wrapper>
            <CategoryText>{isEnglish ? item.typeENG : item.typePL}</CategoryText>
            <ul>
                {things}
            </ul>
        </Wrapper>
    );
}

export default Category;