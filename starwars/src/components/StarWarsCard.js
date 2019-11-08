import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
border: 2px solid black;
width: 400px;
margin: 20px;
background-color: lightgrey;
`

function StarWarsCard(props) {
    return (
        <Card>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
        </Card>
    )
}

export default StarWarsCard