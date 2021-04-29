import React, {useState, useContext, useRef} from "react";
import {v4 as uuidv4} from "uuid";

import Select from "react-select";
import styled from "styled-components";

import TagsInput from "./TagsInput";
import Preview from "./Preview";

import {defaultCategory, defaultObject, sendData, sendImage} from "./services";
import {AdminContext} from "../../context/AdminContext";
import {AppContext} from "../../context/AppContext";
import { validURL } from "./validation";

//Ostatnia litera nie jest przekazywana zx frontu na backend bo się nie aktualizuje na czas
//console.log('/\')

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
  font-weight: bolder;
  
  &:hover{
    background-color: #10ac84;
    color: white;
  }
`

const ErrorMsg = styled.p`
  text-align: left;
  padding: 15px 60px;
  font-weight: bolder;
  font-size: 18px;
  color: white;
  margin-bottom: -30px;
  margin-top: 30px;
  background-color: #ff5e57;
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

const FileInpt = styled.input`
  height: 0.1px;
  width: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const Inpt = styled.div`
  margin-top: 10px;
  width: 240px;
  height: 50px;
  background-color: darkcyan;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  font-weight: bolder;
  cursor: pointer;
`



const AddNewProgram = () => {

    const { addVisible, tagsList } = useContext(AdminContext);
    const { globalLanguage } = useContext(AppContext);

    const [sentMsg, setSentMsg] = useState("");
    const [error, setError] = useState("");

    const [newItem, setNewItem] = useState({
        ...defaultObject,
        tags: tagsList
    });

    const [category, setCategory] = useState(defaultCategory);
    const [logoFile, setLogoFile] = useState(undefined);
    const [imgPreview, setImgPreview] = useState();

    const inpt = useRef(null);
    const fileRef = useRef(null);

    let Select = globalLanguage.Admin.Select;

    const [selectedOption, setSelectedOption] = useState({
        value: "",
        valuePL: "",
        id: ""
    });

    const options = [
        { id: 'uiGraphics', value: 'UI Graphics', label: `${Select.uiGraphics}`, valuePL: 'Grafika UI'},
        { id: 'fonts', value: 'Fonts', label: `${Select.fonts}`, valuePL: 'Czcionki'},
        { id: 'colors', value: 'Colors', label: `${Select.colors}`, valuePL: 'Kolory'},
        { id: 'icons', value: 'Icons', label: `${Select.icons}`, valuePL: 'Ikony'},
        { id: 'logos', value: 'Logos', label: `${Select.logos}`, valuePL: 'Loga'},
        { id: 'favicons', value: 'Favicons', label: `${Select.favicons}`, valuePL: 'Favikony'},
        { id: 'iconFonts', value: 'Icon Fonts', label: `${Select.iconFonts}`, valuePL: 'Czcionki ikonowe'},
        { id: 'stockPhotos', value: 'Stock Photos', label: `${Select.stockPhotos}`, valuePL: 'Zdjęcia'},
        { id: 'stockVideos', value: 'Stock Videos', label: `${Select.stockVideos}`, valuePL: 'Filmy'},
        { id: 'stockMusic', value: 'Stock Music & Sound Effects', label: `${Select.music}`, valuePL: 'Muzyka i efekty dźwiękowe'},
        { id: 'vectors', value: 'Vectors & Clipart', label: `${Select.vectors}`, valuePL: 'Wektory i kliparty'},
        { id: 'htmlCssTemp', value: 'HTML & CSS Templates', label: `${Select.webTemplates}`, valuePL: 'Szablony HTML i CSS'},
        { id: 'cssFramew', value: 'CSS Frameworks', label: `${Select.cssFrameworks}`, valuePL: 'Frameworki CSS'},
        { id: 'cssMetho', value: 'CSS Methodologies', label: `${Select.cssMethodologies}`, valuePL: 'Metodologie CSS'},
        { id: 'cssAnim', value: 'CSS Animations', label: `${Select.cssAnimations}`, valuePL: 'Animacje CSS'},
        { id: 'jsAnim', value: 'Javascript Animations', label: `${Select.jsAnimations}`, valuePL: 'Animacje JavaScript'},
        { id: 'uiComp', value: 'UI Components & Kits', label: `${Select.uiComponents}`, valuePL: 'Komponenty UI'},
        { id: 'reactUiLib', value: 'React UI Libraries', label: `${Select.reactUiLibs}`, valuePL: 'Biblioteki UI React'},
        { id: 'vueUiLib', value: 'Vue UI Libraries', label: `${Select.vueUiLibs}`, valuePL: 'Biblioteki UI Vue'},
        { id: 'angUiLib', value: 'Angular UI Libraries', label: `${Select.angularUiLibs}`, valuePL: 'Biblioteki UI Angular'},
        { id: 'sveUiLib', value: 'Svelte UI Libraries', label: `${Select.svelteUiLibs}`, valuePL: 'Biblioteki UI Svelte'},
        { id: 'reaNatUiLib', value: 'React Native UI Libraries', label: `${Select.reactNativeUiLibs}`, valuePL: 'Biblioteki UI React Native'},
        { id: 'designSys', value: 'Design Systems & Style Guides', label: `${Select.designSystems}`, valuePL: 'Systemy projektowania'},
        { id: 'onlDes', value: 'Online Design Tools', label: `${Select.designTools}`, valuePL: 'Narzędzia do projektowania online'},
        { id: 'downlDes', value: 'Downloadable Design Software', label: `${Select.downloadDesignTools}`, valuePL: 'Pobieralne narzędzia do projektowania'},
        { id: 'desInspi', value: 'Design Inspiration', label: `${Select.designInspirations}`, valuePL: 'Inspiracje projektowe'},
        { id: 'imgComp', value: 'Image Compression', label: `${Select.imgCompression}`, valuePL: 'Kompresja obrazów'},
        { id: 'chromeExt', value: 'Chrome Extensions', label: `${Select.chromeExtensions}`, valuePL: 'Rozszerzenia do chrome'},
        { id: 'others', value: 'Others', label: `${Select.others}`, valuePL: 'Inne'},
    ]

    const clearObj = () => {
        setNewItem(defaultObject);
        setLogoFile("");
    }

    const handleInput = e => {
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setNewItem({
            ...newItem,
            [e.target.name]: value
        });
        categoryToAdd(selectedOption);
    }

    const handleSetImg = e => {
        let file = e.target.files[0]

        if (imgValidation(file)){
            setLogoFile(file);
            console.log(URL.createObjectURL(file))

            setNewItem({
                ...newItem,
                img: URL.createObjectURL(file)
            });

            console.log(newItem);

        }else {
            setLogoFile("");
            setImgPreview(null);
            console.log("Nie można przypisać tego pliku");
        }
    }

    const categoryToAdd = selected => {
        setSelectedOption({
                value: selected.value,
                valuePL: selected.valuePL,
                id: selected.id
            }
        );
        setCategory({
            typeENG: selected.value,
            typePL: selected.valuePL,
            id: selected.id,
            tools: [
                newItem
            ]
        })
    }

    const imgValidation = img => {
        let name = img.name;
        name = name.toLowerCase();

        let len = name.length;
        let type = name.slice(len - 3);

        console.log(name);

        if (type === "png" || type === "svg") return true;
        return false;
    }

    const handleAddFile = () => {
        console.log("Dodaję pliczka byku");

    }

    const validate = () => {
        if (!selectedOption.value){
            setError(globalLanguage.Admin.errCategory);
            return false;
        }
        if (!newItem.name){
            setError(globalLanguage.Admin.errName);
            return false;
        }
        if (!newItem.descriptionPL){
            setError(globalLanguage.Admin.errDescPL);
            return false
        }
        if (!newItem.descriptionENG){
            setError(globalLanguage.Admin.errDescPL);
            return false
        }
        if (!newItem.link || !validURL(newItem.link)){
            setError(globalLanguage.Admin.errLink);
            return false
        }
        if (newItem.tags.length < 6 ){
            setError(globalLanguage.Admin.errTags);
            return false
        }
        if (!logoFile){
            setError(globalLanguage.Admin.errFile);
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
                setSentMsg(globalLanguage.Admin.toolSent);
                sendData(category);
                sendImage(logoFile);
                // clearObj();

                window.setTimeout(() => {
                    setSentMsg("");
                }, 5000);

            } else {
                // setSentMsg("Nie udało się wysłać");
            }
        }
    }

    return(
      <Wrapper isVisible={addVisible}>
          <Preview item={newItem} test={true}/>

          {error && <ErrorMsg>{error}</ErrorMsg>}
          {sentMsg && <SendMsg>{sentMsg}</SendMsg>}

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
                  <Inpt onClick={handleAddFile}>
                      {globalLanguage.Admin.chooseFile}
                      <FileInpt type="file" onChange={handleSetImg} ref={fileRef}/>
                  </Inpt>

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