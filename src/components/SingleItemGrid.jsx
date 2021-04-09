import React, {useContext} from "react";
import styled from "styled-components";

import link from '../images/link.png';
import {AppContext} from "../context/AppContext";

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr 10fr 20fr 6fr 10fr 5fr;
  background-color: #F5F7F5;
  list-style: none;
  padding: 15px 10px;
  max-height: 65px;
  
  &:nth-of-type(even){
    background-color: #E4E4E4;
  }
  
  @media(max-width: 415px){
    grid-template-columns: 3fr 2fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "name price"
      "middle middle"
      "bottom bottom";
    max-height: unset;
    max-width: 100vw;
  }
  
`

const Logo = styled.div`
  background-image: url("${props => props.path}");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 20px;
  height: 50px;
  width: 50px;
  
  @media(max-width: 415px){
    grid-area: logo;
    display: none;
    height: 30px;
    width: 30px;
  }
`

const Description = styled.p`
  margin: 0 auto;
  height: 50px;
  text-align: left;
  color: black;
  font-size: 16px;
  
  @media(max-width: 415px){
    grid-area: middle;
    padding: 10px 10px;
    font-size: 16px;
    text-align: center;
    height: unset;
  }
`

const Price = styled.p`
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  color: ${props => props.price ? '#00C52B' : '#DBB802'};
  padding: 15px 10px;
  border-left: 2px solid #E0E0E0;
  border-right: 2px solid #E0E0E0;
  text-align: center;
  
  @media(max-width: 415px){
    grid-area: price;
    border-left: 2px solid #757575;
    border-right: none;
    padding: 10px 10px;
  }
`

const GetIt = styled.button`
  font-family: 'Lexend', sans-serif;
  font-size: 22px;
  font-weight: 500;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;
  line-height: 50px;
  transition: .3s;
  
  &:hover{
    transform: scale(1.2);
  }

  @media(max-width: 415px){
    grid-area: bottom;
    font-size: 18px;

    &:hover{
      transform: none;
    }
    
  }
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
  margin-left: 40px;
  padding: 10px 25px 10px 0;
  border-right: 2px solid #E0E0E0;
  

  @media(max-width: 415px){
    grid-area: name;
    font-size: 22px;
    padding: 5px 25px 5px 0;
    border-right: none;
    text-align: center;
    margin-left: 0px;
  }
`

const SingleItem = ({item}) => {

    const { isEnglish } = useContext(AppContext);

    const OpenLink = myUrl => {
        console.log(myUrl);
        let newWindow = window.open(myUrl, '_blank');
        newWindow.focus();
    }

    const ItemPrice = (item) => {
        if (item){
            return isEnglish ? "Free" : "Darmowy";
        }
        return isEnglish ? "Paid" : "Płatny";
    }

    return(
      <ListItem>
          <Logo path={window.location.origin + item.img} />
          <ItemName>{item.name}</ItemName>
          <Description>{isEnglish ? item.descriptionENG : item.descriptionPL}</Description>
          <Price price={item.price}>{ItemPrice(item.price)}</Price>
          <GetIt onClick={() => OpenLink(item.link)}>
              {isEnglish ? 'Get it here' : 'Przejdź' }
              <Icon/>
          </GetIt>
      </ListItem>
    );
}

export default SingleItem;