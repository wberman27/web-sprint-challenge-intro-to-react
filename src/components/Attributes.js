import React, { useState, useEffect} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/index'

export default function Attributes(props){
    const {currentCharacterId, close} = props
    const [attributes, setAttributes] = useState(null)

    

    useEffect(()=>{
        console.log(currentCharacterId)
        axios
        .get(`${BASE_URL}/${currentCharacterId}`)
        .then(res =>{
            console.log(res.data)
            setAttributes(res.data);
        })
        .catch(err =>{
            console.log(err);
        })

    }, [currentCharacterId])



    return (
        
        <div className = 'container'>     
            {
                attributes &&
                <>
                    <h3>Attributes of <span>{attributes.name}</span> (id: {currentCharacterId})</h3>
                    <p>Gender: {attributes.gender}</p>
                    <p>Height: {attributes.height}</p>
                    <p>Mass: {attributes.mass}</p>
                    <p>BirthYear: {attributes.birth_year}</p>
                    <p>Eye Color: {attributes.eye_color}</p>
                    <p>Hair Color: {attributes.hair_color}</p>
                    <p>Skin Color: {attributes.skin_color}</p>
                </>
            }
            <button onClick={close}> Close </button>
        </div>
        
    )

}