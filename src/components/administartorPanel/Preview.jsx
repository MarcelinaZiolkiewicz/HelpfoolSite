import React, { useContext } from 'react';
import {AdminContext} from "../../context/AdminContext";
import styled from "styled-components";

import SingleItemGrid from "../SingleItemGrid";

const Wrapper = styled.div`
  display: ${props => props.isVisible ? "block" : "none"};
`

const Preview = props => {

    const { previewVisible } = useContext(AdminContext);

    return(
      <Wrapper isVisible={previewVisible}>
          <SingleItemGrid item={props.item}/>
      </Wrapper>
    );
}

export default Preview;