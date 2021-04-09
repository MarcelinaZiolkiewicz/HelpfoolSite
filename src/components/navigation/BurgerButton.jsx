import React from 'react';
import styled from "styled-components";

const Background = styled.div`
  background-color: rgba(245, 247, 245, 0.7);
  padding: 20px 25px;
  top: 0;
  right: 0;
  position: fixed;
  border-bottom-left-radius: 20px;
  z-index: 10;
  
  //noSelect
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  @media(min-width: 420px){
    display: none;
  }
`

const StyledBurger = styled.button`
  background-color: transparent;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #0D0C1D;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  @media(min-width: 420px){
    display: none;
  }
`
const BurgerButton = ({ open, setOpen }) => {
    return (
        <Background>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledBurger>
        </Background>
    )
}

export default BurgerButton;