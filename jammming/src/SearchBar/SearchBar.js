import React, { useState } from 'react';
import './SearchBar.css';
import Spotify from '../Spotify/Spotify';

function SearchBar(props) {
    const [text, setText] = useState('');

    // const fetchData = value => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(response => response.json())
    //     .then(json => {
    //         const searchResults = json.filter(user => {
    //             return (
    //                 value &&
    //                 user &&
    //                 user.name &&
    //                 user.name.toLowerCase().includes(value)
    //             );
    //         });
    //         props.setSearchResults(searchResults);
    //     });
    // };

    const search = (value) => {
        Spotify.search(value).then(props.setSearchResults);
    }

    const handleTextChange = e => {
        setText(e.target.value);
        search(e.target.value);
    };

    return (
        <div className='SearchComponent'>
            <h2 className='SearchText'>Search</h2>
            <input className='SearchBar' onChange={handleTextChange} value={text} type='text' placeholder='What do you want to listen to?'></input>
        </div>
    )
}

export default SearchBar;