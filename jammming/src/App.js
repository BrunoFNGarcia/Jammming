import './App.css';
import React, { useState } from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState(['']);

  const addTrack = (track) => {
    if (playlistTracks.some((addedTrack) => addedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    };
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prevTracks) => prevTracks.filter((index) => index.id !== track.id))
  };

  const changePlaylistName = (name) => {
    setPlaylistName(name)
  };

  const savePlaylist = () => {
    alert(`You created the playlist ${playlistName}`)
    setPlaylistTracks([]);
    setPlaylistName('');
}

  return (
    <div className="App">
      <h1>Ja<strong>mmm</strong>ing</h1>
      <SearchBar setSearchResults={setSearchResults}/>
      <div className='main'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist 
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          playlistName={playlistName} 
          onNameChange={changePlaylistName} 
          onSave={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;
