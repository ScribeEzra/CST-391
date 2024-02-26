import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dataSource from './dataSource';

const EditCreature = (props) => {

    let creature = {
        name: '',
        description: '',
        hp: '',
        atk: '',
        def: '',
        unique: false,
    };

    let newCreatureCreation = true;

    if (props.creature) {
        creature=props.creature;
        newCreatureCreation = false;
    };

    const [creatureName, setCreatureName] = useState('');
    const [description, setDescription] = useState('');
    const [hp, setHp] = useState('');
    const [atk, setAtk] = useState('');
    const [def, setDef] = useState('');
    const [unique, setUnique] = useState(false);
    const navigate = useNavigate();

    const updateCreatureName = (event) => {
        setCreatureName(event.target.value)
    };
    const updateDescription = (event) => {
        setDescription(event.target.value)
    };
    const updateHp = (event) => {
        setHp(event.target.value)
    };
    const updateAtk = (event) => {
        setAtk(event.target.value)
    };
    const updateDef= (event) => {
        setDef(event.target.value)
    };
    const updateUnique = (event) => {
        setUnique(event.target.checked)
    };

    const handleFormSubmit= (event) => {
        event.preventDefault();

        console.log("submit");
        const editedCreature = {
            creatureId: creature.creatureId,
            creatureName: creatureName,
            description: description,
            hp: hp,
            atk: atk,
            def: def,
            unique: unique,
        }

        console.log(editedCreature);

        saveCreature(editedCreature);
    };

    const saveCreature = async (creature) => {
        let response;
        if (newCreatureCreation)
            response = await dataSource.post('/creatures', creature);
        else
        response = await dataSource.put(`/creatures/${creature.creatureId}`, creature);
        console.log(response);
        console.log(response.data);
        props.onEditCreature(navigate);
    };

    const handleCancel = () => {
        navigate("/");
    };

    return (
        <div className='container'>
        <form onSubmit={handleFormSubmit} className='card-body'>
            <h1>{newCreatureCreation ? "Create New" : "Edit"} Creature</h1>
            <div>
                <ul>
                    <li>
                        <label htmlFor="creatureName">Creature Name</label>
                        <input type="text" className="form-control" id="creatureName" placeholder="Enter Creature's Name" value={creatureName} onChange={updateCreatureName} />
                    </li>
                    <li>
                        <label htmlFor="creatureDescription">Description</label>
                        <textarea type="text" className="form-control" id="creatureDescription" placeholder="Enter Creature Description" value={description} onChange={updateDescription} />
                    </li>
                    <li>
                        <label htmlFor="creatureHp">HP</label>
                        <input type="text" className="form-control" id="creatureHp" placeholder="Enter Creature's HP" value={hp} onChange={updateHp} />
                    </li>
                    <li>
                        <label htmlFor="creatureAtk">ATK</label>
                        <input type="text" className="form-control" id="creatureAtk" placeholder="Enter Creature's ATK" value={atk} onChange={updateAtk} />
                    </li>
                    <li>
                        <label htmlFor="creatureDef">DEF</label>
                        <input type="text" className="form-control" id="creatureDef" placeholder="Enter Creature's DEF" value={def} onChange={updateDef} />
                    </li>
                    <li>
                        <label htmlFor="unique">Is the creature unique as in there is only one of them?</label>
                        <input type="checkbox" id="unique" checked={unique} onChange={updateUnique} />
                    </li>
                </ul>
            </div>
            <div align="center">
                <button type="cancel" className="btn btn-light" onClick={handleCancel}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default EditCreature;