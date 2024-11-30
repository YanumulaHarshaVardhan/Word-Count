import React, { useState } from 'react';

function WordCounter() {
const [text, setText] = useState('');

const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
};

const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
};

return (
    <div>
<textarea
        placeholder=""
        onChange={handleChange}
        value={text}
        rows="4"
        cols="50"
/>
<p>Word Count: {countWords(text)}</p>
    </div>
);
}

export default WordCounter;
