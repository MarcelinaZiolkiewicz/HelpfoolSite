import React, {useState, useContext, useRef} from "react";
import {v4 as uuidv4} from "uuid";

import Select from "react-select";
import styled from "styled-components";

import TagsInput from "./TagsInput";
import Preview from "./Preview";

import {defaultCategory, defaultObject, sendData} from "./services";
import {AdminContext} from "../../context/AdminContext";
import {AppContext} from "../../context/AppContext";
import { validURL } from "./validation";


const Wrapper = styled.div`
  margin-top: 20px;
  display: ${props => props.isVisible ? 'block' : 'none'};
`

const SuperSelect = styled(Select)`
  margin-top: 10px;
  width: 225px;
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
  font-family: 'Lexend', sans-serif;
  resize: none;
  display: block;
  padding: 5px 10px;
  margin-top: 10px;
  height: 100px;
  width: 225px;
  font-size: 16px;
  border: 2px solid black;
  outline: none;
  
  &:focus{
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

const FirstSection = styled.section`
  width: 30%;

  @media(max-width: 1250px){
    width: 50%;
    margin: 0;
  }
  
  @media(max-width: 415px) {
    width: 100%;
  }
`

const SecondSection = styled.section`
  width: 30%;
  
  
  @media(max-width: 1250px){
    width: 50%;
    margin: 0;
  }
  
  @media(max-width: 700px) {
    width: 100%;
    margin: 0;
  }
`

const ThirdSection = styled.section`
  width: 30%;
  margin-right: 10%;
  
  @media(max-width: 1250px){
    width: 100%;
  }
`

const Button = styled.input`
  display: block;
  background-color: transparent;
  border: 2px solid black;
  padding: 5px 10px;
  font-size: 18px;
  transition: .3s;
  margin-top: 20px;
  max-width: 250px;
  
  &:hover{
    background-color: black;
    color: white;
  }
`

const ErrorMsg = styled.p`
  text-align: left;
  padding: 15px 80px;
  font-weight: bolder;
  font-size: 18px;
  color: red;
  margin-bottom: -40px;
`

const SendMsg = styled.p`
  background-color: mediumseagreen;
  font-size: 18px;
  display: block;
  padding: 10px 20px;
  color: white;
  font-weight: bolder;
  margin-top: 30px;
`

const AddNewProgram = () => {

    const { addVisible, isReadyToSend, setIsReadyToSend } = useContext(AdminContext);

    const { globalLanguage } = useContext(AppContext);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const [newItem, setNewItem] = useState(defaultObject);

    const [category, setCategory] = useState(defaultCategory);

    const inpt = useRef(null);

    let Select = globalLanguage.Admin.Select;

    const [selectedOption, setSelectedOption] = useState({
        value: "",
        valuePL: ""
    });

    const options = [
        { value: 'UI Graphics', label: `${Select.uiGraphics}`, valuePL: 'Grafika UI'},
        { value: 'fonts', label: `${Select.fonts}`, valuePL: 'Czcionki'},
        { value: 'Colors', label: `${Select.colors}`, valuePL: 'Kolory'},
        { value: 'Icons', label: `${Select.icons}`, valuePL: 'Ikony'},
        { value: 'Logos', label: `${Select.logos}`, valuePL: 'Loga'},
        { value: 'Favicons', label: `${Select.favicons}`, valuePL: 'Favikony'},
        { value: 'Icon Fonts', label: `${Select.iconFonts}`, valuePL: 'Czcionki ikonowe'},
        { value: 'Stock Photos', label: `${Select.stockPhotos}`, valuePL: 'Zdjęcia'},
        { value: 'Stock Videos', label: `${Select.stockVideos}`, valuePL: 'Filmy'},
        { value: 'Stock Music & Sound Effects', label: `${Select.music}`, valuePL: 'Muzyka i efekty dźwiękowe'},
        { value: 'Vectors & Clipart', label: `${Select.vectors}`, valuePL: 'Wektory i kliparty'},
        { value: 'HTML & CSS Templates', label: `${Select.webTemplates}`, valuePL: 'Szablony HTML i CSS'},
        { value: 'CSS Frameworks', label: `${Select.cssFrameworks}`, valuePL: 'Frameworki CSS'},
        { value: 'CSS Methodologies', label: `${Select.cssMethodologies}`, valuePL: 'Metodologie CSS'},
        { value: 'CSS Animations', label: `${Select.cssAnimations}`, valuePL: 'Animacje CSS'},
        { value: 'Javascript Animations', label: `${Select.jsAnimations}`, valuePL: 'Animacje JavaScript'},
        { value: 'UI Components & Kits', label: `${Select.uiComponents}`, valuePL: 'Komponenty UI'},
        { value: 'React UI Libraries', label: `${Select.reactUiLibs}`, valuePL: 'Biblioteki UI React'},
        { value: 'Vue UI Libraries', label: `${Select.vueUiLibs}`, valuePL: 'Biblioteki UI Vue'},
        { value: 'Angular UI Libraries', label: `${Select.angularUiLibs}`, valuePL: 'Biblioteki UI Angular'},
        { value: 'Svelte UI Libraries', label: `${Select.svelteUiLibs}`, valuePL: 'Biblioteki UI Svelte'},
        { value: 'React Native UI Libraries', label: `${Select.reactNativeUiLibs}`, valuePL: 'Biblioteki UI React Native'},
        { value: 'Design Systems & Style Guides', label: `${Select.designSystems}`, valuePL: 'Systemy projektowania'},
        { value: 'Online Design Tools', label: `${Select.designTools}`, valuePL: 'Narzędzia do projektowania online'},
        { value: 'Downloadable Design Software', label: `${Select.downloadDesignTools}`, valuePL: 'Pobieralne narzędzia do projektowania'},
        { value: 'Design Inspiration', label: `${Select.designInspirations}`, valuePL: 'Inspiracje projektowe'},
        { value: 'Image Compression', label: `${Select.imgCompression}`, valuePL: 'Kompresja obrazów'},
        { value: 'Chrome Extensions', label: `${Select.chromeExtensions}`, valuePL: 'Rozszerzenia do chrome'},
        { value: 'Others', label: `${Select.others}`, valuePL: 'Inne'},
    ]

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
            id: uuidv4(),
            tools: [
                newItem
            ]
        })
    }

    const validate = () => {
        if (!selectedOption.value){
            setError("Nie wybrano kategorii");
            return false;
        }
        if (!newItem.name){
            setError("Brak nazwy");
            return false;
        }
        if (!newItem.descriptionPL){
            setError("Brak polskiego opis");
            return false
        }
        if (!newItem.link || !validURL(newItem.link)){
            setError("Niepoprawny link");
            return false
        }
        setError("");
        return true;
    }

    const submit = e => {
        e.preventDefault();
        if (document.activeElement !== inpt.current)
        {
            if (validate()){
                console.log('wysyłam na serwer');
                setSent(true);
                sendData(category);
                clearObj();
            } else {
                console.log("Wysyłanie nie powiodło się");
            }
        }

        window.setTimeout(() => {
            setSent(false);
        }, 5000);

    }

    return(
      <Wrapper isVisible={addVisible}>
          <Preview item={newItem}/>

          <ErrorMsg>{error && error}</ErrorMsg>
          {sent && <SendMsg>Poprawnie wysłano</SendMsg>}

          <Form onSubmit={submit}>
              <FirstSection>
                  <Description>{globalLanguage.Admin.category}</Description>
                  <SuperSelect
                      options={options}
                      onChange={categoryToAdd}
                  />

                  <Description>{globalLanguage.Admin.name}</Description>
                  <Input
                      type="text"
                      name="name"
                      value={newItem.name}
                      onChange={handleInput}
                  />

                  <Description>{globalLanguage.Admin.link}</Description>
                  <Input
                      type="text"
                      name="link"
                      value={newItem.link}
                      onChange={handleInput}
                  />

                  <Description>Logo</Description>
                  <Input type="text" />

                  <Description>{globalLanguage.Admin.price}</Description>
                  <Checkbox
                      type="checkbox"
                      name="price"
                      checked={newItem.price}
                      onChange={handleInput}
                  />

              </FirstSection>
              <SecondSection>
                  <Description>{globalLanguage.Admin.descPL}</Description>
                  <Textarea
                      placeholder="Opis"
                      name="descriptionPL"
                      value={newItem.descriptionPL}
                      onChange={handleInput}
                  />

                  <Description>{globalLanguage.Admin.descENG}</Description>
                  <Textarea
                      placeholder="Description"
                      name="descriptionENG"
                      value={newItem.descriptionENG}
                      onChange={handleInput}
                  />
              </SecondSection>
              <ThirdSection>
                  <Description>{globalLanguage.Admin.tags}</Description>
                  <TagsInput inpt={inpt}/>

              </ThirdSection>

              <Button type="submit" value={globalLanguage.Admin.submitBtt}/>
          </Form>
      </Wrapper>
    );
}

export default AddNewProgram;