import React, { useEffect, useState} from 'react';
import './app.css';
import dataSource from './dataSource';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import SearchCreature from './searchCreature';
import NavBar from './navBar';
import OneCreature from './oneCreature';
import EditCreature from './editCreature';
import 'bootstrap';

const App = (props) => {
  const [creatureList, setCreatureList] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [currentlySelectedCreatureId, setCurrentlySelectedCreatureId] = useState(0);

  let refresh = false;

  const updateSearchResults = (phrase) => {
    console.log('phrase is ' + phrase);
    setSearchPhrase(phrase);
  }

  useEffect (() => {
    loadCreatures();
  }, [refresh]);

  const loadCreatures = async () => {
    const response = await dataSource.get('/creatures');
    setCreatureList(response.data);
  }

  const updateSingleCreature = (id, navigate, uri) => {
    console.log('Update Single Creature = ', id);
    console.log('Update Single Creature = ', navigate);
    var indexNumber=0;
    for (var i = 0; i < creatureList.length; ++i) {
      if (creatureList[i].id === id) indexNumber = i;
    }
    setCurrentlySelectedCreatureId(indexNumber);
    let path = uri + indexNumber;
    console.log('path', path);
    navigate(path);
  };

  console.log('creatureList', creatureList);
  const renderedList = creatureList.filter((creature) => {
    if (
      creature.description.toLowerCase().includes(searchPhrase.toLowerCase()) ||
      searchPhrase === ''
    ) {
      return true;
    }
    return false;
  });
  console.log('renderedList', renderedList);

  const onEditCreature = (navigate) => {
    loadCreatures()
    navigate("/");
}

  return (
  <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <SearchCreature
              updateSearchResults={updateSearchResults}
              creatureList={renderedList}
              updateSingleCreature={updateSingleCreature}
            />
          }
        />
        <Route exact path='/new' element={<EditCreature onEditCreature={onEditCreature}/>} />
        <Route exact path='/edit/:creatureId' element={<EditCreature onEditCreature={onEditCreature} creature={creatureList[currentlySelectedCreatureId]}/>} />
        <Route exact path='/show/:creatureId' element={<OneCreature creature={creatureList[currentlySelectedCreatureId]}/>} />
      </Routes>
    </BrowserRouter>
  </div>
  );
};

export default App;