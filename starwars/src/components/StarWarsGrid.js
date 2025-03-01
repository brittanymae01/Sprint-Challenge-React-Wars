import React, { useState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

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
        <Container>
            {starCharacter.map(person => {
                return (
                    <StarWarsCard
                        key={person.created}
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
        </Container>
    )
}

export default StarWarsGrid