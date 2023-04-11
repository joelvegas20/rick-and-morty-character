import React from 'react'
import {  CardsContainerBackground, CharacterContainer, CharactersContainer, SearchContainer } from '../assets/styles/components/character/Character.style'
import SearchBar from '../components/searchBar/SeatchBar'
import Cards from '../components/cards/Cards'


export default function Character({onSearch, onClose , characters }) {


  return (
    <CharactersContainer>
      <SearchContainer>
        <h1>
        Search Characters
        </h1>
        <SearchBar onSearch={onSearch} />
      </SearchContainer>

      <CharacterContainer>
      <CardsContainerBackground>
      </CardsContainerBackground>
      {/* <CardsContainer> */}
        <Cards characters={characters} onClose = {onClose} />
      {/* </CardsContainer> */}
      </CharacterContainer>
    </CharactersContainer>
  )
}
