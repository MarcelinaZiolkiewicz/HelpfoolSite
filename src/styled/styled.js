import styled from "styled-components";
import {Link} from "react-router-dom";

export const SuperLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
//Language icon
export const Icon = styled.div`
  background-image: url(${props => window.location.origin + props.langImg});
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
  height: 40px;
  width: 40px;
  transition: .3s;
  
  &:hover{
    transform: scale(1.2);
  }
  
  
  @media(max-width: 730px){
    height: 60px;
    width: 60px;
  }
  
  
`

//List
export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 15px;
  
  @media(max-width: 730px){
    display: flex;
    flex-direction: column;
    background-color: white;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    //opacity: ${props => props.isOpen ? '1' : '0'};
    padding-top: 50vw;
    height: 100vh;
    width: 100vw;
    z-index: 2;
    position: fixed;
    top: 0;
    overflow: hidden;
    transition: transform .2s ease-in-out;
    
    a{
      font-size: 28px;
    }
    
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