import styled from "styled-components";
import {Link} from "react-router-dom";

export const SuperLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text};
`