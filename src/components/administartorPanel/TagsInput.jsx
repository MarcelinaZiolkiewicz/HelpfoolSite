import React, {useState} from "react";
import styled from "styled-components";

const Tag = styled.p`
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  background-color: darkcyan;
  color: white;
  border-radius: 20px;
  margin: 5px 5px 0 0;
`

const Wrapper = styled.div`
  margin-top: 10px;
  width: 290px;
  border: 2px solid black;
  padding: 5px 10px 10px 10px;
  
  &:focus-within{
    border-color: darkcyan;
  }
  
  @media(max-width: 420px){
    width: 225px;
  }
`

const Input = styled.input`
  font-family: 'Lexend', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  width: ${props => (props.value.length + 2) * 8 + 'px'};
`

const TagsInput = ({inpt}) => {

    const [tagsList, setTagsList ] = useState([]);
    const [singleTag, setSingleTag] = useState("");

    const renderTags = tags => {
        return tags.map(item => (
            <Tag key={item}>{item}</Tag>
        ))
    }

    const handleChange = e => {
        setSingleTag(e.target.value);
    }

    const focusInput = () => {
        inpt.current.focus();
    }

    const onKeyDown = e => {
        if (e.keyCode === 8 && inpt.current.value === "") setTagsList(tagsList.splice(0, tagsList.length - 1));
        if (e.keyCode === 13 && singleTag.length >= 3) {
            tagsList.push(`#${singleTag}`);
            setSingleTag("");
        }
    }

    return(
        <Wrapper onClick={focusInput}>
            {renderTags(tagsList)}
            <Input
                type="text"
                onChange={handleChange}
                value={singleTag}
                ref={inpt}
                onKeyDown={onKeyDown}
            />
        </Wrapper>
    );
}

export default TagsInput;