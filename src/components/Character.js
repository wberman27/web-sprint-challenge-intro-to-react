// Write your Character component here
import React, {useState, useEffect} from 'react'


export default function Character(props){
    const {info, open, } = props    

    return ( //onclick, invoking open function will setCurrentCharacterId!
        <div className='character'>
            {props.info.name}
            <button onClick={() => open(props.info.id)}>
                See Attributes
            </button>
    
        </div>

    )
}