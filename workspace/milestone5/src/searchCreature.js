import React from 'react';
import SearchForm from './searchForm';
import CreatureList from './creatureList';
import './app.css';

const SearchCreature = (props) => {
    console.log('props uith update single creature', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults}/>
            <CreatureList creatureList={props.creatureList} onClick={props.updateSingleCreature}/>
        </div>
    );
};

export default SearchCreature;