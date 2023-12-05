import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/Tracklist';

function Playlist(props) {

    const handleNameChange = e => {
        props.onNameChange(e.target.value);
    }

    return (
        <div className='Playlist'>
            <div className='PlaylistTracks'>
                <h2 className='PlaylistTitle'>Give your playlist a name</h2>
                <input 
                    className='PlaylistInput' 
                    placeholder='Playlist Name' 
                    type='text' 
                    onNameChange={handleNameChange}>
                </input>
                <Tracklist 
                    tracks={props.playlistTracks} 
                    onRemove={props.onRemove}
                    isRemoval={true}
                />
            </div>
            <button className='PlaylistButton' onClick={props.onSave}>Save to Spotify</button>
        </div>
    )
}

export default Playlist;