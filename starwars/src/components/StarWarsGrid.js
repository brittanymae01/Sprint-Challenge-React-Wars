import React, { useState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard'
import axios from 'axios'

function StarWarsGrid() {
    const [starCharacter, setStarCharacter] = useState([])

    useEffect(() => {
        axios.get('https://lambda-swapi.herokuapp.com/api/people ').then(response => {
            // console.log(response.data.results)
            setStarCharacter(response.data.results)
        }).catch(error => {
            console.log('the data was not returned', error)
        })
    }, [])
    return (
        <div>
            {starCharacter.map((person, index) => {
                return (
                    <StarWarsCard
                        key={person.index}
                        name={person.name}
                        height={person.height}
                        mass={person.mass}
                        hairColor={person.hair_color}
                        skinColor={person.skin_color}
                        eyeColor={person.eye_color}
                        birthYear={person.birth_year}
                        gender={person.gender}
                    />
                );
            })}
        </div>
    )
}

export default StarWarsGrid