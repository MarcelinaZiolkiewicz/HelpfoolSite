import styled from "styled-components";
import {Link} from "react-router-dom";

import pl from '../images/pl.png';
import eng from  '../images/eng.png';

export const SuperLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`

export const Icon = styled.div`
  background-image: url(${props => props.isEnglish ? pl : eng});
  background-size: contain;
  display: inline-block;
  height: 40px;
  width: 40px;
  margin-left: -10px;
`
