import React, { useState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard'
import axios from 'axios'

function StarWarsGrid() {
    const [starCharacter, setStarCharacter] = useState([])

    useEffect(() => {
        axios.get('https://swapi.co/api/people/').then(response => {
            console.log(response.data.results)
            // setStarCharacter(response.data.results)
        }).catch(error => {
            console.log('the data was not returned', error)
        })
    }, [])
    return (
        <div>
            <StarWarsCard />
        </div>
    )
}

export default StarWarsGrid