import './App.css';
import React, { useCallback, useState } from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import { mockData } from './Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = event => {
    setSearchResults(event.target.value);
  };

  return (
    <div className="App">
      <h1>Ja<strong>mmm</strong>ing</h1>
      <SearchBar onSearch={search}/>
      <div className='main'>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
