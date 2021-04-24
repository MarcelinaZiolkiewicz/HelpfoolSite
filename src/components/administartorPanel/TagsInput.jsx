import React, {useState, useRef} from "react";
import styled from "styled-components";

const Tag = styled.p`
  display: inline-block;
  padding-left: 10px;
`

const Wrapper = styled.div`
  width: 300px;
  height: 120px;
  border: 2px solid black;
  padding: 10px 10px;
`

const Input = styled.input`
  font-family: 'Lexend', sans-serif;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  margin-left: 10px;
  width: ${props => (props.value.length + 1) * 8}px;
`
const Btt = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`


const TagsInput = () => {

    const [tagsList, setTagsList ] = useState([]);
    const [singleTag, setSingleTag] = useState("#");


    const inpt = useRef(null)

    const renderTags = tags => {
        return tags.map(item => (
            <Tag key={item}>{item}</Tag>
        ))
    }

    const handleChange = e => {
        setSingleTag(e.target.value);
    }

    const addTag = () => {
        tagsList.push(singleTag);
        setSingleTag("#");
        console.log(tagsList);
    }

    const focusInput = () => {
        inpt.current.focus();
    }

    function onKeyDown (e) {
        if (e.keyCode === 8){
            setTagsList(tagsList.splice(-1, 1));
            console.log(tagsList);
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
            <Btt onClick={addTag}></Btt>
        </Wrapper>
    );
}

export default TagsInput;