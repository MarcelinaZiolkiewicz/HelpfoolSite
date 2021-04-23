import React, {useContext} from  'react';
import styled from "styled-components";
import {AdminContext} from "../../context/AdminContext";


const Button = styled.button`
  font-family: 'Lexend', sans-serif;
  display: inline-block;
  min-width: 15vw;
  font-size: 20px;
  color: black;
  padding: 10px 20px;
  border: 2px solid black;
  margin: 5px 5px;
  background-color: transparent;
  transition: .3s;
  outline: none;
  
  &:hover{
    background-color: black;
    color: white;
  }
`

const AdminButtons = () => {

    const {handleAddVisible} = useContext(AdminContext);

    return(
        <div>
            <Button onClick={() => handleAddVisible(1)}> Dodaj nowe narzędzie </Button>
            <Button onClick={() => handleAddVisible(2)}> Podgląd </Button>
            <Button onClick={() => handleAddVisible(3)}> Przeglądaj proponowane </Button>
        </div>
    );
}

export default AdminButtons;