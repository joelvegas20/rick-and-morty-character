import { useState } from "react";
import { ButtonSearch, InputSearch , SearchContainer } from "../../assets/styles/components/searchBar/Search.style";

export default function SearchBar({ onSearch }) {

  const [character, setCharacter] = useState(0);

  return (
    <SearchContainer>
      <InputSearch onChange={(event)=> {
        setCharacter(event.target.value)
      }} type="search" placeholder="Search by ID..." />
      <ButtonSearch onClick={()=>{

        return onSearch(character)
      }}>Agregar</ButtonSearch>
      <ButtonSearch onClick={()=> {
        let n = Math.floor(Math.random() * 826 )
        return onSearch(n)
      }}>Random</ButtonSearch>
    </SearchContainer>
  );
}
