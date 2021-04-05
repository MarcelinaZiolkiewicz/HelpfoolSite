import React from 'react';
import styled from "styled-components";
import {ButtonElement, MenuWrapper, Label, InfoText, SmallerLabel, SubpagesWrapper} from "../styled/styled";

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
    return(
        <SubpagesWrapper>
            <Label>O projekcie</Label>
            <InfoText>
                Praca programisty nie należy do najłatwiejszych, często wymaga od nas przekopywania się przez tony internetu w poszukiwaniu potrzebnych do prototypowania czy tworzenia aplikacji bibliotek, grafik, ikon, filmów itd.
                Tak, mnie też to zawsze męczyło, często jak znalazłem jakąś przydatną stronę to w końcu i tak ginęła i musiałem jej szukać na nowo. A gdyby tak nie musieć spędzać tony czasu na szukaniu tego co trzeba?
                Właśnie dlatego powstało Helpfool, żeby unikać tracenia czasu na szukanie, bo tutaj wszystko jest pod ręką, zawsze.
            </InfoText>

            <Label>
                Wykorzystane zasoby
            </Label>
            <InfoText>Cała strona jest darmowa i zostały do niej wykorzystane darmowe zasoby które możecie znaleźć pod tymi linkami</InfoText>

            <Icons>
                <SmallerLabel>
                    Ikony
                </SmallerLabel>
                <MenuWrapper>
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
                </MenuWrapper>
            </Icons>

        </SubpagesWrapper>
    );
}

export default About;