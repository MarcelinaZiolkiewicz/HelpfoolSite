import React, {useContext} from 'react';

import styled from "styled-components";

import {ButtonElement, ListWrapper, Label, InfoText, SmallerLabel, SubpagesWrapper} from "../styled/styled";
import {AppContext} from "../context/AppContext";

import link from '../images/link.png';
import pl from '../images/pl.png';
import eng from  '../images/eng.png';
import arrow from  '../images/arrow.png';

const Link = styled.a`
  font-size: 20px;
  text-decoration: none;
  color: #22a6b3;
  font-weight: bolder;
  
`

const Icon = styled.div`
  display: inline-block;
  background-image: url(${props => props.link});
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  margin-top: 10px;
  
  @media(max-width: 415px){
    height: 12vw;
    width: 12vw;
  }
`

const ResourcesList = styled.div`
  padding-left: 2vw;
  
  @media(max-width: 415px){
    padding-bottom: 60px;
  }
`

const About = () => {

    const { isEnglish } = useContext(AppContext);
    const { globalLanguage } = useContext(AppContext);

    return(
        <SubpagesWrapper>
            <Label>{globalLanguage.About.about}</Label>
            <InfoText>
                {globalLanguage.About.aboutMessage}
            </InfoText>

            <Label>
                {globalLanguage.About.resourcesLabel}
            </Label>
            <InfoText>
                {globalLanguage.About.resourcesText}
            </InfoText>

            <ResourcesList>
                <SmallerLabel>
                    {globalLanguage.About.resourceIcons}
                </SmallerLabel>

                <ListWrapper>
                    <ButtonElement>
                        <Link href="https://icons8.com/icon/59826/link" target="_blank">
                            <Icon link={link}/>
                        </Link>
                    </ButtonElement>

                    <ButtonElement>
                        <Link href="https://icons8.com/icon/SeQmYQ-YS_S1/poland" target="_blank">
                            <Icon link={pl}/>
                        </Link>
                    </ButtonElement>

                    <ButtonElement>
                        <Link href="https://icons8.com/icon/122839/great-britain" target="_blank">
                            <Icon link={eng}/>
                        </Link>
                    </ButtonElement>

                    <ButtonElement>
                        <Link href="https://icons8.com/icons/set/arrow" target="_blank">
                            <Icon link={arrow}/>
                        </Link>
                    </ButtonElement>

                </ListWrapper>
                {/*Źródło*/}
                <SmallerLabel>
                    {globalLanguage.About.resourceSource}
                </SmallerLabel>
                <ListWrapper>
                    <ButtonElement>
                        <Link href="https://github.com/bradtraversy/design-resources-for-developers" target="_blank">
                            {globalLanguage.About.resource}
                        </Link>
                    </ButtonElement>
                </ListWrapper>
            </ResourcesList>
        </SubpagesWrapper>
    );
}

export default About;