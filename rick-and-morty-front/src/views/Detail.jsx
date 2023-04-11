import React from 'react'
import { useParams } from 'react-router-dom'
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Detail() {

  const [character, setCharacter] = useState([]);
  const {id} = useParams()


  useEffect(() => {

    axios.get(`http://localhost:3001/rickandmorty/detail/${id}`)
    .then((response) => {
      return setCharacter(response.data)
    } )
    
  }, [id]);

  return (
    <div>
    <button>Atras</button>
      <h1>Name: {character.name}</h1>
      <h3>Status: {character.status}</h3>
      <h3>Specie: {character.species}</h3>
      <h2>gender: {character.gender}</h2>
      <h3>Origin: {character.origin?.name}</h3>
      <img src={character.image} />
    </div>
  )
}
