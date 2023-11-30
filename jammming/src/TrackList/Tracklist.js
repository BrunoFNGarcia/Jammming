import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div>
            {props.tracks.map((track, id) => {
                return (
                    <Track
                        key={id}
                        track={track}
                    />
                )
            })}
        </div>
    )
}

export default Tracklist;