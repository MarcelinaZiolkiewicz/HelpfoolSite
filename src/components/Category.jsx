import React from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";


const CategoryText = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`

const Wrapper = styled.div`
  padding: 10px 20px;
`

const Category = ({item}) => {


    const things = item.tools.map(thing => (
          <SingleItem item={thing}/>
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