import React from 'react';

import characters from '../data'
import Cards from '../components/cards/Cards';
import SearchBar from '../components/searchBar/SearchBar';

const Characters = (props) => {
    return (
        <div>
            <h1>Search Character</h1>
            <SearchBar/>
            <Cards characters={characters}/>
        </div>
    );
}

export default Characters;
