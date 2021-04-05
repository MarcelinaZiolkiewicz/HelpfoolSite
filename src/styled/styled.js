import styled from "styled-components";
import {Link} from "react-router-dom";

import pl from '../images/pl.png';
import eng from  '../images/eng.png';

export const SuperLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`
//Language icon
export const Icon = styled.div`
  background-image: url(${props => props.isEnglish ? pl : eng});
  background-size: contain;
  display: inline-block;
  height: 40px;
  width: 40px;
  margin-left: -10px;
`

//List
export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;

  @media(max-width: 415px){
    display: none;
    //background-color: white;
    //z-index: 2;
    //position: absolute;
    //flex-direction: column;
    //left: 25%;
    //top: 25%;
    //transform: translate(25%, 25%);
  }
`

export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
`

export const ButtonElement = styled.li`
  list-style: none;
  padding: 10px 20px;
  font-size: 20px;
  transition: .3s;
  
  &:hover{
    transform: scale(1.2);
  }
`
//Text
export const Label = styled.p`
  padding-top: 6vh;
  display: block;
  font-size: 28px;
  font-weight: bolder;
`
export const InfoText = styled.p`
  padding-top: 2vh;
  font-size: 20px;
  width: 50vw;

  @media(max-width: 415px){
    width: 90vw;
  }
`

export const SmallerLabel = styled.p`
  padding-top: 2vh;
  font-size: 20px;
  font-weight: bolder;
`

export const SubpagesWrapper = styled.div`
  width: 50vw;
  height: calc(100vh - 20vh);
  margin: 5vh auto 0 auto;

  @media(max-width: 415px){
    width: 90vw;
  }
`