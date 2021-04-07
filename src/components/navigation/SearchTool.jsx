import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {AppContext} from "../../context/AppContext";

import { language } from '../../language';

const SearchBox = styled.input`
  background-color: #CEF1F1;
  border: none;
  outline: none;
  height: 40px;
  font-size: 18px;
  width: 20vw;
  transition: .3s;
  text-align: center;
  color: black;
  border-radius: 13px;
  
  display: none;
  
  &::placeholder{
    color: #636e72;
  }
  
  &:hover{
    background-color: #97E9E9;
  }

  @media(max-width: 415px){
    font-size: 16px;
    width: 75vw;
    margin: 0 auto;
  }
`

const Submit = styled.button`
  display: none;
`

const SearchTool = () => {

    const { isEnglish } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState("");
    const [ isInputAvailable, setIsInputAvailable ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(searchValue);
        setSearchValue("");
    }

    const handleInputChange = e => {
        setSearchValue(e.target.value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <SearchBox
                    type="text"
                    onChange={handleInputChange}
                    value={searchValue}
                    placeholder={isEnglish ? language.english.searchInput : language.polish.searchInput }
                />
            </form>
            <Submit type="submit"/>
        </div>
    );
};

export default SearchTool;