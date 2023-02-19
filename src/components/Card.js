import React from 'react'
import "./card.css"
const Card = ({ pokemon }) => {

    console.log(pokemon)

    return (
        <div className='card'>
            <div className='cardImg'>
                <img src={pokemon.img}></img>
            </div>
            <h3 className="cardName">{pokemon.name}</h3>
            <div className='cardInfo'>
                <div>Level : {pokemon.level}</div>
            </div>
        </div>
    )
}

export default Card