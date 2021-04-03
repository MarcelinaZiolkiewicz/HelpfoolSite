import React, {useState} from "react";
import styled from "styled-components";

import figma from '../images/logos/figma.svg';

const ListItem = styled.li`
  background-color: #F5F7F5;
  list-style: none;
  padding: 5px 10px;
  
  &:nth-of-type(even){
    background-color: #EFF2EF;
  }
`

const Logo = styled.div`
  background-image: url("${props => props.path}");
  background-size: contain;
  background-repeat: no-repeat;
  height: 50px;
  width: 50px;
`

const Description = styled.p`
  text-align: left;
  color: black;
  border-left: 2px solid gray;
`

const Price = styled.p`
  color: ${props => props.price};
`

const GetIt = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
`

const LinkImage = styled.div`
  
`

const SingleItem = ({item}) => {

    return(
      <ListItem>
          <Logo path={item.img} />
          <p>{item.name}</p>
          <Description>{item.descriptionPL}</Description>
          <Price>{item.price ? "Free" : "Paid"}</Price>
          <GetIt>Get it here</GetIt>
      </ListItem>
    );
}

export default SingleItem;