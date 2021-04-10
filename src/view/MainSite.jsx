import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {toolsList} from "../toolsList";

import Category from "../components/Category";
import SortBar from "../components/SortBar";
import BackToTop from "../components/BackToTop";

const Wrapper = styled.div`
  width: 80vw;
  background-color: #FFFFFF;
  margin: 15vh auto 0 auto;
  
  @media(max-width: 415px){
    width: 100vw;
    margin-top: 5vh;
  }
`

const MainSite = () => {

    const [myData, setMyData] = useState({toolsList: []});
    const [errorMessage, setErrorMessage] = useState("");

    const getData = () => {
        fetch('http://localhost:3000/data.json')
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

    useEffect(() => {
        getData();
    }, []);

    return(
        <Wrapper>
            {/*<SortBar/>*/}
            {/*{errorMessage && <div>Something went wrong...</div>}*/}
            {renderCategories}
            <BackToTop/>
        </Wrapper>
    );
}

export default MainSite;