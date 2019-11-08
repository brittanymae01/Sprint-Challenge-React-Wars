import React, { setState, useEffect } from 'react'
import StarWarsCard from './StarWarsCard'

function StarWarsGrid() {
    const [starCharacter, setStarCharacter] = setState([])

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