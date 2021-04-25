import React, {useContext} from 'react';
import styled from "styled-components";

import closeImage from '../images/close.png';
import {AppContext} from "../context/AppContext";

const MyMessage = styled.div`
  background-color: rgba(121, 224, 237, 0.7);
  border-radius: 10px;
  padding: 10px 20px;
  margin: 0 20px 3vh 20px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media(max-width: 730px){
    width: 90vw;
    margin: 0 auto;
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
  outline: none;
  transition: .3s;
  
  &:hover{
    transform: rotate(90deg);
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