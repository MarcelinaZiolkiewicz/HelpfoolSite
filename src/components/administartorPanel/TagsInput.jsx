import React, {useState} from "react";


const TagsInput = () => {

    const [tagsList, setTagsList ] = useState([]);

    const showTags = tagsList.map(item => (
            <p>#{item}</p>
    ))


    return(
        <div>
            {showTags}
            <input type="text"/>
        </div>
    );
}

export default TagsInput;