import React, { useState} from 'react';
import './post.css';

const AddPost = (props) => {
    const [text, setText] = useState('');

    const updateText = (event) => {
        setText(event.target.value);
        console.log('Text input is ', text);
    };

    return (
        <div className='post-container'>
            <textarea onChange={updateText} tyoe='text' value={text} />
            <br />
            <button onClick={() => props.onAdd(text)}>Add</button>
        </div>
    )
}

export default AddPost;