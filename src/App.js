import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios' //used to fetch api data .get
import { v4 as uuidv4 } from 'uuid'; //allows for unique key names
import './App.css';
import {BASE_URL} from './constants/index'
import Character from './components/Character'
import Attributes from './components/Attributes'
import StyledApp from './StyledApp'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([])
  const [currentCharacterId, setCurrentCharacterId] = useState(null)

  const open = id =>{ //on open via button, set character id
    setCurrentCharacterId((id))
  }
  const close = () =>{ //close button will set character id to null, so Attributes doesnt render
    setCurrentCharacterId(null)
  }

  var newCharId = 1;


  useEffect(() =>{ //on initial render only, get data from api and setCharacters to it
    const fetchCharacters = () =>{
      axios
      .get(`${BASE_URL}`)
      .then(res =>{
        console.log(res);
        setCharacters(res.data)
      })
      .catch(err =>{
        console.log(err)
      });
    };
    fetchCharacters();
  }, []);

  return ( //Fragment will allow for more divs inside return
    <Fragment>
    <StyledApp>
    <h1 className="Header">Star Wars Characters</h1>
    <div className="App">
      
      
      {
        characters.forEach(ch =>{
          ch.id = newCharId
          return newCharId = newCharId + 1;
        })
      }
      <div className = 'charContainer'>
      {  
        characters.map(ch => {
          return <Character key = {uuidv4(1)} info={ch} open={open} close={close} currentCharacterId = {currentCharacterId}/> //give Character key, props info, open, close and currentId
        })
      }
      </div>
      {
        currentCharacterId && <Attributes currentCharacterId={currentCharacterId} close={close} /> //give Attributes, if, we have an id, props currentId and close
      }
    </div>
    </StyledApp>
    <div className = 'footImg'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt="Star Wars logo"></img>
    </div>
    </Fragment>
  );
}

export default App;
