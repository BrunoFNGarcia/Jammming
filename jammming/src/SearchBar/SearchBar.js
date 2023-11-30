import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [text, setText] = useState('');

    const fetchData = value => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            const results = json.filter(user => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            setSearchResults(searchResults);
        });
    };

    const handleTextChange = value => {
        setText(value);
        fetchData(value);
    };

    return (
        <div className='SearchComponent'>
            <input className='SearchBar' onChange={e => handleTextChange(e.target.value)} value={text} type='text' placeholder='What do you want to listen to?'></input>
            <button className='SearchButton'>Search</button>
        </div>
    )
}

export default SearchBar;