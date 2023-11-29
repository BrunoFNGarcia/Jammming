import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/Tracklist';

function SearchResults() {
    return (
        <div className='search-results'>
            <h2>Results</h2>
            <TrackList />
        </div>
    )
}

export default SearchResults;