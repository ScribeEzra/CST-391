const Card = (props) => {
    console.log('Card component - creatureId:', props.creatureId);

    const handleButtonClick = (uri) => {
        console.log('ID Clicked Is ' + props.creatureId);
        props.onClick(props.creatureId, uri);
    };

    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <h5 className="card-title">#{props.creatureId} - {props.creatureName}</h5>
                <p className="card-text">{props.creatureDescription}</p>
                <button className="btn btn-primary" onClick={() => handleButtonClick('/show/')}>{props.buttonText}</button>
                <button className="btn btn-secondary" onClick={() => handleButtonClick('/edit/${props.creature.creatureId}')}>Edit</button>
            </div>
        </div>
    );
};
export default Card;