import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar(props) {
    const [text, setText] = useState('');

    const fetchData = value => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => {
            const searchResults = json.filter(user => {
                return (
                    value &&
                    user &&
                    user.name &&
                    user.name.toLowerCase().includes(value)
                );
            });
            props.setSearchResults(searchResults);
        });
    };

    const handleTextChange = e => {
        setText(e.target.value);
        fetchData(e.target.value);
    };

    return (
        <div className='SearchComponent'>
            <h2 className='SearchText'>Search</h2>
            <input className='SearchBar' onChange={handleTextChange} value={text} type='text' placeholder='What do you want to listen to?'></input>
            {/* <button className='SearchButton'>Search</button> */}
        </div>
    )
}

export default SearchBar;