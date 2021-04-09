import React, { useContext } from 'react';
import styled from "styled-components";

import arrow from '../images/arrowWhite.png';
import {AppContext} from "../context/AppContext";
import {SuperLink} from "../styled/styled";

const BackButton = styled.div`
  height: 4rem;
  width: 4rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #b2bec3;
  border-radius: 25px;
  display: flex;
  align-items: center;
  transition: .3s;
  
  &:hover{
    transform: scale(1.1);
  }
`

const Icon = styled.div`
  transform: rotate(180deg);
  display: inline;
  background-image: url(${arrow});
  background-size: contain;
  background-repeat: no-repeat;
  height: 3rem;
  width: 3rem;
  margin: 0 auto;
`

const BackToTop = () => {

    const { handleBackToTop } = useContext(AppContext);

    return(
        <BackButton onClick={handleBackToTop}>
            <Icon/>
        </BackButton>
    );
}

export default BackToTop;