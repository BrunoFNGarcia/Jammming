import React from 'react';
import { mockData } from '../Spotify/Spotify';
import Track from '../Track/Track';

function Tracklist() {
    return (
        <div>
            {mockData.map(track => {
                return (
                    <Track
                        id={track.id}
                        name={track.name}
                        artist={track.artist}
                        album={track.album}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;