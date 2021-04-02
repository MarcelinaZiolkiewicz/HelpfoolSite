import React, {useState} from 'react';
import styled from 'styled-components';

const SearchBox = styled.input`
  background-color: transparent; 
  border: none;
  border-bottom: 2px solid #dcdde1;
  outline: none;
  height: 40px;
  font-size: 18px;
  width: 15vw;
  padding-left: 15px;
  transition: .3s;
  color: black;
  
  &:hover{
    background-color: #f5f6fa;
  }
`

const Submit = styled.button`
  display: none;
`

const SearchTool = () => {

    const [searchValue, setSearchValue] = useState("");

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
                    placeholder="Search tool..."
                />
            </form>
            <Submit type="submit"/>
        </div>
    );
};

export default SearchTool;