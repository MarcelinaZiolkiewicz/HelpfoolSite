import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 10px 20px;

  @media(max-width: 415px){
    display: none;
  }
`

const SortBar = () => {
    return(
        <Wrapper>
            Sortowańsko - react-select.com
        </Wrapper>
    );
};

export default SortBar;