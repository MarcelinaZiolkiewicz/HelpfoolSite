import React from 'react';
import styled from "styled-components";

const FooterBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  background-color: #30336b;
  font-size: 16px;
  text-align: center;
  margin-top: 50px;
`
const Text = styled.a`
  display: inline-block;
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  color: white;
`


const Footer = () => {

    return(
        <FooterBox>
            <Text href="https://github.com/MichalZiolkiewicz" target="_blank">@Michał Ziółkiewicz 2021</Text>
        </FooterBox>
    )
}

export default Footer;