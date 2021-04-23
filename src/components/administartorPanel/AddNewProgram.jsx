import React, {useState, useRef} from "react";
import styled from "styled-components";

import { v4 as uuidv4 } from 'uuid';
import Select from "react-select";

import TagsInput from "./TagsInput";
import {defaultCategory, defaultObject, testOptions, sendData} from "./services";

const Wrapper = styled.div`
  margin-top: 20px;
`

const SuperSelect = styled(Select)`
    width: 200px
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

    const [isAddVisible, setIsAddVisible] = useState(true);
    const [sent, setSent] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        value: "",
        valuePL: ""
    });

    //selectCategories - load from server
    const options = testOptions;

    const [newItem, setNewItem] = useState(defaultObject);
    const [category, setCategory] = useState(defaultCategory);

    const handleAddVisible = option => {
        switch (option) {
            case 1:
                setIsAddVisible(!isAddVisible);
                break;
            case 2:
                console.log('jeszcze nie ma');
                break;
            case 3:
                console.log('jeszcze nie ma');
                break;
            default:
                console.log('Błędna wartość');
                break;
        }
    }

    const clearObj = () => {
        setNewItem(defaultObject);
    }

    const handleInput = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setNewItem({
            ...newItem,
            [e.target.name]: value
        });
        categoryToAdd(selectedOption);
    }

    const categoryToAdd = selected => {

        setSelectedOption({
                value: selected.value,
                valuePL: selected.valuePL
            }
        );

        setCategory({
            typeENG: selected.value,
            typePL: selected.valuePL,
            tools: [
                newItem
            ]
        })
    }

    const submit = e => {
        e.preventDefault();

        sendData(category);
        setSent(true);
        // clearObj();
        console.log(category);
    }

    return(
      <Wrapper>
          <Header onClick={() => handleAddVisible(1)}> Dodaj nowe narzędzie </Header>
          <Header>Podgląd</Header>
          <Header>Przeglądaj proponowane</Header>

          <Form isVisible={isAddVisible} onSubmit={submit}>
              <LeftSide>
                  <Description>Kategoria</Description>
                  <SuperSelect
                      options={options}
                      onChange={categoryToAdd}
                  />

                  <Description>Nazwa</Description>
                  <Input
                      type="text"
                      name="itemName"
                      value={newItem.itemName}
                      onChange={handleInput}
                  />

                  <Description>Adres strony</Description>
                  <Input
                      type="text"
                      name="link"
                      value={newItem.link}
                      onChange={handleInput}
                  />

                  <Description>Logo</Description>
                  <Input type="file" />

                  <Description>Darmowy</Description>
                  <Checkbox
                      type="checkbox"
                      name="paid"
                      checked={newItem.paid}
                      onChange={handleInput}
                  />

              </LeftSide>
              <RightSide>
                  <Description>Opis po polsku</Description>
                  <Textarea
                      name="descriptionPL"
                      value={newItem.descriptionPL}
                      onChange={handleInput}
                  />

                  <Description>Opis po angielsku</Description>
                  <Textarea
                      name="descriptionENG"
                      value={newItem.descriptionENG}
                      onChange={handleInput}
                  />

                  <Description>Tagi</Description>
                  <TagsInput/>

              </RightSide>
              <input type="submit" value="Dodaj"/>
              {sent && <p>Poprawnie wysłano</p>}
          </Form>
      </Wrapper>
    );
}

export default AddNewProgram;