import React from 'react';
import './SearchResults.css';
import Tracklist from '../TrackList/Tracklist';

function SearchResults(props) {
    return (
        <div className='SearchResults'>
            <h2 className='SearchResultsTitle'>Results</h2>
            <Tracklist 
                tracks={props.searchResults} 
                onAdd={props.onAdd} 
            />
        </div>
    )
}

export default SearchResults;