import React, {useContext} from "react";
import styled from "styled-components";

import link from '../images/link.png';
import {AppContext} from "../context/AppContext";

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 3fr auto 20fr 6fr 10fr 5fr;
  background-color: #F5F7F5;
  list-style: none;
  padding: 15px 10px;
  max-height: 65px;
  
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
  margin: 0 auto;
  height: 50px;
  text-align: left;
  color: black;
  font-size: 16px;
 
`

const Price = styled.p`
  font-family: 'Lexend', sans-serif;
  font-weight: 600;
  color: ${props => props.price ? '#00C52B' : '#DBB802'};
  padding: 15px 20px;
  border-left: 2px solid #E0E0E0;
  border-right: 2px solid #E0E0E0;
  text-align: center;
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