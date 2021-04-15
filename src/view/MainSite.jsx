import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';

import {toolsList} from "../toolsList";

import Category from "../components/Category";
import SortBar from "../components/SortBar";
import BackToTop from "../components/BackToTop";
import Message from "../components/Message";
import {AppContext} from "../context/AppContext";

const Wrapper = styled.div`
  width: 80vw;
  background-color: #FFFFFF;
  margin: 10vh auto 0 auto;
  
  @media(max-width: 730px){
    width: 100vw;
    margin-top: 5vh;
  }
`

const MainSite = () => {

    const { messageVisibility } = useContext(AppContext);

    const [myData, setMyData] = useState({toolsList: []});
    const [errorMessage, setErrorMessage] = useState("");

    const getData = () => {
        fetch('http://www.helpfool.pl/dataTest/data.json')
            .then(response => {
                if(!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then(data => {
                console.log("Loaded data:", data);
                setMyData(data);
            })
            .catch(error => {
                console.log("error ", error);
                setErrorMessage(error);
            })
    }

    const renderCategories = myData.toolsList.map( item => (
       <Category item={item} />
    ));

    const items = toolsList.map( item => (
       <Category item={item} />
    ));

    useEffect(() => {
        getData();
    }, []);

    return(
        <Wrapper>
            { messageVisibility && <Message message="Cały czas pracujemy żeby usprawnić Helpfool! "/>}
            {/*<SortBar/>*/}
            {items}
            {/*{renderCategories}*/}
            <BackToTop/>
        </Wrapper>
    );
}

export default MainSite;