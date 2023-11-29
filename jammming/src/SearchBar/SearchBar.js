import React, { useCallback, useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [text, setText] = useState('');

    const handleTextChange = event => {
        setText(event.target.value);
    };

    const search = useCallback(() => {
        props.onSearch(text);
    }, [props.onSearch, text]);

    return (
        <div className='SearchComponent'>
            <input className='SearchBar' onChange={handleTextChange} type='text' placeholder='What do you want to listen to?'></input>
            <button className='SearchButton' onClick={search} >Search</button>
        </div>
    )
}

export default SearchBar;