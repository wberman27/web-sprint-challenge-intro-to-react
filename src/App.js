import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from 'styled-components'
import './App.css';
import {BASE_URL} from './constants/index'
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  const open = id =>{
    setCurrentCharacterId(id)
  }

  const close = () =>{
    setCurrentCharacterId(null)
  }

  useEffect(() =>{
    const fetchCharacters = () =>{
      axios
      .get()
      .then(res =>{
        setCharacters(res.data);
      })
      .catch(err =>{
        console.log(err)
      });
    };
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
