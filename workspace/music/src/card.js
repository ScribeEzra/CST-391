import React from 'react';
import reactDOM from 'react-dom';

const Card = (props) => {

    const handleButtonClick = (event,uri) => {
        console.log('ID Clicked Is ' + props.albumId);
        props.onClick(props.albumId, uri);
    };

    return (
        <div className="card" style={{width: '18rem'}}>
                <img src={props.imgUrl} className="card-img-top" alt="Placeholder Image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button className="btn btn-primary" onClick={() => handleButtonClick(props.albumId, '/show/')}>{props.buttonText}</button>
                    <button className="btn btn-secondary" onClick={() => handleButtonClick(props.albumId, '/edit/')}>Edit</button>
                </div>
            </div>
    )
}

export default Card;