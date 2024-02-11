import React from 'react';
import reactDOM from 'react-dom';

const Card = (props) => {
    return (
        <div className="card" style={{width: '18rem'}}>
                <img src={props.imgUrl} className="card-img-top" alt="Placeholder Image"/>
                <div className="card-body">
                    <h5 className="card-title">{props.albumTitle}</h5>
                    <p className="card-text">{props.albumDescription}</p>
                    <button href="#" className="btn btn-primary">{props.buttonText}</button>
                </div>
            </div>
    )
}

export default Card;