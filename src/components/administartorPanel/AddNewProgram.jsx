import React, {useState} from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 20px;
`

const Header = styled.button`
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

const Description = styled.label`
  font-size: 16px;
  color: black;
  display: block;
`

const Input = styled.input`
  display: block;
`

const Checkbox = styled.input`
  display: block;
`

const Textarea = styled.textarea`
  resize: none;
`

const Form = styled.form`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-flow: row wrap;
  padding: 40px;
  
  @media(max-width: 415px){
    flex-flow: column nowrap;
  }
`

const LeftSide = styled.div`
  width: 50%;
`

const RightSide = styled.div`
  width: 50%;
`

const AddNewProgram = () => {

    const [isAddVisible, setIsAddVisible] = useState(false);

    const handleAddVisible = () => {
        setIsAddVisible(!isAddVisible);
    }

    return(
      <Wrapper>
          <Header onClick={handleAddVisible}> Dodaj nowe narzędzie </Header>
          <Header>Podgląd</Header>
          <Header>Przeglądaj proponowane</Header>

          <Form isVisible={isAddVisible}>
              <LeftSide>
                  <Description>Nazwa</Description>
                  <Input type="text"/>

                  <Description>Adres strony</Description>
                  <Input type="text"/>

                  <Description>Logo</Description>
                  <Input type="file"/>

                  <Description>Płatny</Description>
                  <Checkbox type="checkbox"/>
              </LeftSide>
              <RightSide>
                  <Description>Opis po polsku</Description>
                  <Textarea/>

                  <Description>Opis po angielsku</Description>
                  <Textarea/>

                  <Description>Tagi</Description>
                  <Input type="text"/>

                  <input type="submit" value="Dodaj"/>
              </RightSide>
          </Form>
      </Wrapper>
    );
}

export default AddNewProgram;