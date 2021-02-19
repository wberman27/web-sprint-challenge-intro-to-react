// Write your Character component here
import React, {useState, useEffect} from 'react'
import Attributes from './Attributes'


export default function Character(props){
    const {info, open} = props
    const [currentCharacterId, setCurrentCharacterId] = useState(null)

    const attr = Array.from(props.info)
    
    const close = () =>{
        setCurrentCharacterId(null)
      }

    return (
        
    <div className='character'>
        {props.info.name}
        <button onClick={() => open(info)}>
            . . .
        </button>

     {
        currentCharacterId && <Attributes characterId={currentCharacterId} close={close} />
      }
    </div>
    )
}