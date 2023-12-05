import React from 'react';
import './Playlist.css';
import Tracklist from '../TrackList/Tracklist';

function Playlist(props) {
    return (
        <div className='Playlist'>
            <div className='PlaylistTracks'>
                <h2>Give your playlist a name</h2>
                <Tracklist 
                    tracks={props.playlistTracks} 
                    onRemove={props.onRemove}
                    isRemoval={true}
                />
            </div>
            <button className='PlaylistButton'>Save to Spotify</button>
        </div>
    )
}

export default Playlist;