import React, {useContext} from "react";
import styled from "styled-components";

import link from '../images/link.png';
import {AppContext} from "../context/AppContext";

const ListItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr 20fr 6fr 10fr auto;
  background-color: #F5F7F5;
  list-style: none;
  padding: 15px 10px;
  max-height: unset;
  
  &:nth-of-type(even){
    background-color: #E4E4E4;
    
    p:nth-child(even){
      border-color: #757575;
    }
  }
  
  @media(max-width: 525px){
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
  background-image: url("${props => props.test ? props.path : props.testPath}");
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 10px;
  height: 50px;
  width: 50px;
  
  @media(max-width: 730px){

    height: 30px;
    width: 30px;
  }
  
  @media(max-width: 525px){
    display: none;
  }
`

const Description = styled.p`
  margin: 0 auto;
  height: 50px;
  text-align: left;
  color: black;
  font-size: 18px;
  padding: 0 10px 0 10px;
  
  @media(max-width: 800px){
    font-size: 16px;
    padding: 10px 10px;
    text-align: center;
    height: unset;
  }
  
  @media(max-width: 525px){
    grid-area: middle;
    font-size: 16px;
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
  
  @media(max-width: 525px){
    grid-area: price;
    border-left: 2px solid #757575;
    border-right: none;
    padding: 10px 10px;
  }
`

const GetIt = styled.button`
  font-family: 'Lexend', sans-serif;
  font-size: 20px;
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

  @media(max-width: 750px){
    font-size: 16px;
    line-height: 60px;
  }

  @media(max-width: 525px){
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
  
  @media(max-width: 1050px){
    font-size: 20px;
  }
  
  @media(max-width: 800px){
    font-size: 18px;
    
  }
  
  @media(max-width: 525px){
    grid-area: name;
    font-size: 22px;
    padding: 5px 25px 5px 0;
    border-right: none;
    text-align: center;
    margin-left: 0px;
  }
`

const CenterImg = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
`


const SingleItem = ({item, test}) => {

    const { isEnglish, globalLanguage } = useContext(AppContext);


    const OpenLink = myUrl => {
        console.log(myUrl);
        let newWindow = window.open(myUrl, '_blank');
        newWindow.focus();
    }

    const langType = item => {
        if (globalLanguage.lang === 'PL'){
            return item.descriptionPL
        }
        else if(globalLanguage.lang === 'ENG'){
            return item.descriptionENG
        }
    }

    const ItemPrice = price => {
        if (price){
            if (globalLanguage.lang === 'PL') return "Darmowy";
            else if(globalLanguage.lang === 'ENG') return "Free";
        }
        else {
            if (globalLanguage.lang === 'PL') return "Płatny";
            else if(globalLanguage.lang === 'ENG') return "Paid";
        }
    }

    return(
      <ListItem>
          <CenterImg>
              <Logo path={window.location.origin + item.img} testPath={item.img} test={test}/>
          </CenterImg>
          <ItemName>{item.name}</ItemName>
          <Description>{langType(item)}</Description>
          <Price price={item.price}>{ItemPrice(item.price)}</Price>
          <GetIt onClick={() => OpenLink(item.link)}>
              {globalLanguage.getItHere}
          </GetIt>
      </ListItem>
    );
}

export default SingleItem;