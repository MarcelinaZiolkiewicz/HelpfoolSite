import React from 'react';
import styled from "styled-components";
import { SubpagesWrapper, Label, InfoText } from '../styled/styled';

const Link = styled.a`
  display: inline-block;
  margin-top: 20px;
  font-size: 22px;
  font-weight: bolder;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border: 2px solid black;
  transition: .3s;
  
  &:hover{
    background-color: black;
    color: white;
  }
`

const StyledLi = styled.li`
  list-style: none;
`

const Help = () => {
    return(
        <SubpagesWrapper>
            <Label>Chcę pomóc!</Label>
            <InfoText>Cały projekt jest otwrto źródłowy więc jeśli coś nie działa, masz pomysła jak coś usprawnić, lub chcesz pomóc w rozwoju to masz otwarte drzwi!</InfoText>
            <InfoText>Dostępne są tylko 2 języki - Polski i Angielski. Jeśli jesteś w stanie przetłumaczyć traść na jakiś inny to się nie krępuj. </InfoText>
            <ul>
                <StyledLi><Link href="https://github.com/MichalZiolkiewicz/HelpfoolSite" target="_blank">Projekt na githubie</Link></StyledLi>
                <StyledLi><Link href="#" target="_blank">Lista Trello</Link></StyledLi>
            </ul>


        </SubpagesWrapper>
    );
}

export default Help;
