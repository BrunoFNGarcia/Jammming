import './App.css';
import React, { useState } from 'react';
import Playlist from './Playlist/Playlist';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from './SearchResults/SearchResults';
import Spotify from './Spotify/Spotify';

console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID);

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState(['']);
  const [text, setText] = useState('');

  const handleTextChange = e => {
    setText(e.target.value);
    search(e.target.value);
};

  const search = (value) => {
    Spotify.search(value).then(setSearchResults);
}

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

  const savePlaylist = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    const variavel = await Spotify.savePlaylist(playlistName, trackUris)
    if (variavel) {
      setPlaylistTracks([]);
      setSearchResults([]);
      setPlaylistName('');
      setText('');
    }
  }
  
  return (
    <div className="App">
      <h1 className='AppTitle'>JA<strong>MMM</strong>ING</h1>
      <SearchBar 
        value={text} 
        onChange={handleTextChange} 
        setSearchResults={setSearchResults}
      />
      <div className='main'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          className='Playlist'
          playlistTracks={playlistTracks} 
          onRemove={removeTrack} 
          playlistName={playlistName} 
          onChange={changePlaylistName} 
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
