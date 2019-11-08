import React from 'react'

function StarWarsCard(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>Birth Year: {props.birthYear}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
}

export default StarWarsCard