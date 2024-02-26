import React from 'react';
import Card from './card';
import { useNavigate } from 'react-router-dom';

const CreatureList = (props) => {

    const handleSelectionOne = (creatureId, uri) => {
        console.log('Selected Id is ' + creatureId);
        props.onClick(creatureId, navigator, uri);
    }

    console.log("props creatureList", props);
    const navigator = useNavigate();
    const creatures = props.creatureList.map((creature) => {
        return (
            <Card
                key={creature.id}
                creatureId={creature.id}
                creatureName={creature.creatureName}
                creatureDescription={creature.description}
                creatureHp={creature.hp}
                creatureAtk={creature.atk}
                creatureDef={creature.def}
                creatureUnique={creature.unique}
                buttonText = "View"
                onClick={handleSelectionOne}
            />
        );
    });
    return <div className="container">{creatures}</div>
}

export default CreatureList;