import React from 'react';
import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';

function SearchBar(props) {
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