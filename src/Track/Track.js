import React from 'react';
import './Track.css';

function Track(props) {

    const handleAdd = () => {
        props.onAdd(props.track);
    };

    const handleRemove = () => {
        props.onRemove(props.track);
    };

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className='TrackButton' onClick={handleRemove}>-</button>
            );
        } else {
            return (
                <button className='TrackButton' onClick={handleAdd}>+</button>
            );
        };
    };

    return (
        <div className='Track'>
            <div className='TrackInfo'>
                <h3 className='TrackInfoTitle'>{props.track.name}</h3>
                <p className='TrackInfoArtistAlbum'>{props.track.artist} | {props.track.album}</p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;