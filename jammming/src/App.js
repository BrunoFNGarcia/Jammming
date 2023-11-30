import './App.css';
import React, { useCallback, useState } from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = event => {
    setSearchResults(event.target.value);
  };

  return (
    <div className="App">
      <h1>Ja<strong>mmm</strong>ing</h1>
      <SearchBar onSearch={setSearchResults}/>
      <div className='main'>
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
