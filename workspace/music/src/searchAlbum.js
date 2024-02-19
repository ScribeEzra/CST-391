import React from 'react';
import SearchForm from './searchForm';
import AlbumList from './albumList';

const SearchAlbum = (props) => {
    console.log('props uith update single album', props);
    return (
        <div className='container'>
            <SearchForm onSubmit={props.updateSearchResults}/>
            <AlbumList albumList={props.albumList} onClick={props.updateSingleAlbum}/>
        </div>
    )
}

export default SearchAlbum;