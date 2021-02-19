import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios'
import styled, {keyframes} from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import {BASE_URL} from './constants/index'
import Character from './components/Character'
import Attributes from './components/Attributes';
import theme from './theme'

const StyledApp = styled.div`
  .charContainer{
    margin-top: 8%;
    border-radius: 5px;
  }
  color: ${props => props.theme.primaryColor};
  text-shadow: 1px 1px 5px #fff;
  font-weight: bold;

  #cName{
    color:${props => props.theme.secondaryColor};
    text-shadow: 1px 1px 5px black;
  }
  span{
    color: black;
  }

  h1 { //animation - slides the header onto page from the left to the center
        text-align:center;
        position: absolute;
        left: -100%;
        width: 100%;
        animation: slide 2s forwards;
      }
  @keyframes slide{
      100% {left: 0; }
  }
  button { //button hover animation
      &:hover{
        transform: scale(1.5);
        transition: .5s ease-in-out;
      }transition: .5s ease-in-out;
      margin-top:2%;
      margin-bottom:4%;
      margin-left: 2%;
      border-radius: 5px;
    }
`;


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
          return <Character key = {uuidv4(1)} info={ch} open={open} close={close} currentCharacterId = {currentCharacterId}/>
        })
      }
      </div>
      {
        currentCharacterId && <Attributes currentCharacterId={currentCharacterId} close={close} />
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
