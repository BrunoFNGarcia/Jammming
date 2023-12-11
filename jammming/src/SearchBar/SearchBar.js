import React, { useState } from 'react';
import './SearchBar.css';
import Spotify from '../Spotify/Spotify';
import { FaSearch } from 'react-icons/fa';

function SearchBar(props) {
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

    return (
        <div className='SearchComponent'>
            <div className='SearchBar'>
                <FaSearch id='SearchBarIcon'/>
                <input 
                    className='SearchBarInput' 
                    onChange={props.onChange} 
                    value={props.value} 
                    type='text' 
                    placeholder='What do you want to listen to?'>
                </input>
            </div>
        </div>
    )
}

export default SearchBar;