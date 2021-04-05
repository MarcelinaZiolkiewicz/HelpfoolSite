import React, {useState} from "react";
import styled from "styled-components";

import link from '../images/link.png';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #F5F7F5;
  list-style: none;
  padding: 15px 10px;
  
  &:nth-of-type(even){
    background-color: #EFF2EF;
  }
`

const Logo = styled.div`
  background-image: url("${props => props.path}");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  height: 50px;
  width: 50px;
`

const Description = styled.p`
  margin: 0 20px;
  height: 50px;
  text-align: left;
  color: black;
  font-size: 16px;
 
`

const Price = styled.p`
  color: ${props => props.price ? '#00C52B' : '#DBB802'};
  padding: 15px 20px;
  border-left: 2px solid #B9B9B9;
  border-right: 2px solid #B9B9B9;
  font-weight: bold;
  
`

const GetIt = styled.button`
  margin-left: 20px;
  font-size: 22px;
  font-weight: bolder;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 50px;
`

const Icon = styled.div`
  display: inline-block;
  background-image: url(${link});
  background-size: contain;
  background-repeat: no-repeat;
  height: 18px;
  width: 18px;
  margin-left: 5px;
`

const ItemName = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-left: 30px;
  padding: 10px 25px 10px 0;
  border-right: 2px solid #B9B9B9;
`

const LinkImage = styled.div`
  
`



const SingleItem = ({item}) => {

    return(
      <ListItem>
          <Logo path={item.img} />
          <ItemName>{item.name}</ItemName>
          <Description>{item.descriptionPL}</Description>
          <Price price={item.price}>{item.price ? "Free" : "Paid"}</Price>
          <GetIt>
              Get it here
              <Icon/>
          </GetIt>
      </ListItem>
    );
}

export default SingleItem;