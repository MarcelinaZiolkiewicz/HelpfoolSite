import React, {useState, useContext} from "react";
import styled from "styled-components";

import { v4 as uuidv4 } from 'uuid';
import Select from "react-select";

import TagsInput from "./TagsInput";
import {defaultCategory, defaultObject, testOptions, sendData} from "./services";
import {AdminContext} from "../../context/AdminContext";
import Preview from "./Preview";

const Wrapper = styled.div`
  margin-top: 20px;
  display: ${props => props.isVisible ? 'block' : 'none'};
`

const SuperSelect = styled(Select)`
  margin-top: 10px;
  width: 200px;
`

const Description = styled.label`
  font-size: 22px;
  color: black;
  display: inline-block;
  margin-top: 10px;
  font-weight: bolder;
`

const Input = styled.input`
  font-family: 'Lexend', sans-serif;
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  padding: 5px 10px;
  outline: none;
  font-size: 18px;
  
  &:focus{
    border-bottom: 2px solid darkcyan;
  }
`

const Checkbox = styled.input`
  margin-left: 15px;
  height: 15px;
  width: 15px;
  cursor: pointer;
`

const Textarea = styled.textarea`
  resize: none;
  display: block;
  padding: 5px 10px;
  margin-top: 10px;
  height: 100px;
  width: 225px;
  //border: none;
  //box-shadow: -8px -8px 0px -6px rgba(0,0,0,0.75);
  border: 2px solid black;
  outline: none;
  
  &:focus{
    //box-shadow: -8px -8px 0px -6px darkcyan;
    border-color: darkcyan;
  }
`

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  padding: 40px;
  
  @media(max-width: 415px){
    flex-flow: column nowrap;
  }
`

const LeftSide = styled.div`
  width: 30%;

  @media(max-width: 1250px){
    width: 50%;
    margin: 0;
  }
  
  @media(max-width: 415px) {
    width: 100%;
  }
`

const RightSide = styled.div`
  width: 60%;
  margin-right: 10%;
  
  @media(max-width: 1250px){
    width: 50%;
    margin: 0;
  }
  
  @media(max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

const Button = styled.input`
  display: block;
  background-color: transparent;
  border: 2px solid black;
  padding: 5px 10px;
  font-size: 18px;
  transition: .3s;
  
  &:hover{
    background-color: black;
    color: white;
  }
`

const AddNewProgram = () => {

    const [sent, setSent] = useState(false);
    const [selectedOption, setSelectedOption] = useState({
        value: "",
        valuePL: ""
    });

    //selectCategories - load from server
    const options = testOptions;

    const [newItem, setNewItem] = useState(defaultObject);
    const [category, setCategory] = useState(defaultCategory);

    const { addVisible } = useContext(AdminContext);

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
        setSent(true); //add set interval
        // clearObj();
        console.log(category);
    }

    return(
      <Wrapper isVisible={addVisible}>
          <Preview item={newItem}/>

          <Form onSubmit={submit}>
              <LeftSide>
                  <Description>Kategoria</Description>
                  <SuperSelect
                      options={options}
                      onChange={categoryToAdd}
                  />

                  <Description>Nazwa</Description>
                  <Input
                      type="text"
                      name="name"
                      value={newItem.name}
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
                  <Input type="text" />

                  <Description>Darmowy</Description>
                  <Checkbox
                      type="checkbox"
                      name="price"
                      checked={newItem.price}
                      onChange={handleInput}
                  />

              </LeftSide>
              <RightSide>
                  <Description>Opis po polsku</Description>
                  <Textarea
                      placeholder="Opis"
                      name="descriptionPL"
                      value={newItem.descriptionPL}
                      onChange={handleInput}
                  />

                  <Description>Opis po angielsku</Description>
                  <Textarea
                      placeholder="Description"
                      name="descriptionENG"
                      value={newItem.descriptionENG}
                      onChange={handleInput}
                  />

                  <Description>Tagi</Description>
                    <p>tba</p>
                  {/*<TagsInput/>*/}

              </RightSide>
              <Button type="submit" value="Dodaj"/>
              {sent && <p>Poprawnie wysłano</p>}
          </Form>
      </Wrapper>
    );
}

export default AddNewProgram;