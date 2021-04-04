import React from "react";
import styled from "styled-components";
import SingleItemGrid from "./SingleItemGrid";


const CategoryText = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  padding-bottom: 20px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
`

const Category = ({item}) => {


    const things = item.tools.map(thing => (
          <SingleItemGrid item={thing}/>
        )
    );

    return(
        <Wrapper>
            <CategoryText>{item.type}</CategoryText>
            <ul>
                {things}
            </ul>
        </Wrapper>
    );
}

export default Category;