import React from 'react';
const OneCreature = (props) => {
    return(
        <div className='container'>
            <div className='text-body'>
                <h2>Creature Details for Creature no {props.creature.creatureId} - {props.creature.creatureName}</h2>
                <div className='row'>
                    <div className='col col-sm-3'>
                        <div>
                            <p className='card-text'>{props.creature.description}</p>
                            <p>HP: {props.creature.hp}</p>
                            <p>ATK: {props.creature.atk}</p>
                            <p>DEF: {props.creature.def}</p>
                            <a href="#"className='btn btn-primary'>
                                Edit
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col col-sm-9'>
                    <div>
                        <p>Location Info Would Go Here</p>
                    </div>
                    <div>
                        <p>Drop Info Would Go Here</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OneCreature;