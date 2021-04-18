import React, {useContext} from 'react';
import styled from "styled-components";

import closeImage from '../images/close.png';
import {AppContext} from "../context/AppContext";

const MyMessage = styled.div`
  position: relative;
  background-color: rgba(121, 224, 237, 0.7);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 20px 3vh 20px;
  font-size: 18px;

  @media(max-width: 730px){
    width: 90vw;
    margin: 0 auto;
  }
  
  @media(max-width: 415px){
    font-size: 14px;
  }
`

const Text = styled.p`
  display: inline;
`

const Close = styled.button`
  background-color: transparent;
  display: inline;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-image: url(${closeImage});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 7px;
  right: 10px;
  outline: none;
  transition: .1s;
  
  &:hover{
    transform: scale(1.2);
  }
  
  @media(max-width: 415px){
    width: 18px;
    height: 18px;
    top: 10px;
    right: 10px;
  }
`

const Message = ({message}) => {

    const { handleCloseMessage } = useContext(AppContext);

    return(
        <MyMessage>
            <Text>{message}</Text>
            <Close onClick={handleCloseMessage}/>
        </MyMessage>
    );
}

export default Message;