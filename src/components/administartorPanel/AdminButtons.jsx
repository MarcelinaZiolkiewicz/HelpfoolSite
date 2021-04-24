import React, {useContext} from  'react';
import styled from "styled-components";
import {AdminContext} from "../../context/AdminContext";
import {AppContext} from "../../context/AppContext";


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
    const {globalLanguage} = useContext(AppContext);

    return(
        <div>
            <Button onClick={() => handleAddVisible(1)}> {globalLanguage.Admin.addBtt} </Button>
            <Button onClick={() => handleAddVisible(2)}> {globalLanguage.Admin.previewBtt} </Button>
            <Button onClick={() => handleAddVisible(3)}> {globalLanguage.Admin.proposedBtt} </Button>
        </div>
    );
}

export default AdminButtons;