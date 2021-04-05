import React, {useContext} from 'react';

import styled from "styled-components";

import {ButtonElement, ListWrapper, Label, InfoText, SmallerLabel, SubpagesWrapper} from "../styled/styled";
import {AppContext} from "../context/AppContext";

import { language } from '../language';

import link from '../images/link.png';
import pl from '../images/pl.png';
import eng from  '../images/eng.png';

const Link = styled.a`
  font-size: 20px;
`

const Icon = styled.div`
  display: inline-block;
  background-image: url(${props => props.link});
  background-size: contain;
  background-repeat: no-repeat;
  height: 60px;
  width: 60px;
  margin-top: 10px;
`

const Icons = styled.div`
  padding-left: 2vw;
`

const About = () => {

    const { isEnglish } = useContext(AppContext);

    return(
        <SubpagesWrapper>
            <Label>{isEnglish ? language.english.About.about : language.polish.About.about}</Label>
            <InfoText>
                {isEnglish ? language.english.About.aboutMessage : language.polish.About.aboutMessage}
            </InfoText>

            <Label>
                {isEnglish ? language.english.About.resourcesLabel : language.polish.About.resourcesLabel}
            </Label>
            <InfoText>
                {isEnglish ? language.english.About.resourcesText : language.polish.About.resourcesText}
            </InfoText>

            <Icons>
                <SmallerLabel>
                    {isEnglish ? language.english.About.resourceIcons : language.polish.About.resourceIcons}
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
                </ListWrapper>
            </Icons>

        </SubpagesWrapper>
    );
}

export default About;