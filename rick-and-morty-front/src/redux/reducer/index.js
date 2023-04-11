import {
  ADD_CHARACTER,
  ADD_CHARACTER_FAV,
  DELETE_CHARACTER_FAV,
  FILTER,
  GET_CHARACTERS,
  GET_FAV,
  ORDER,
} from "../actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export const rootReducer = (state = initialState, action) => {

  console.log(state)

  switch (action.type) {

    case GET_CHARACTERS:

      console.log(state.allCharacters)
      return {
        ...state,
        allCharacters: [...state.allCharacters ,action.payload],
      };

    case ADD_CHARACTER:
      // if (state.allCharacters.some((character) => character.id === action.payload.id)) {
      //   console.log(state.allCharacters)
      //   return {
      //     ...state,
      //     allCharacters: [...state.allCharacters, action.payload],
      //   };
      // } else {
      //   console.log(state.allCharacters)
      //   return {
      //     ...state,
      //     allCharacters: [...state.allCharacters, action.payload],
      //   };
      // }
      if (state.allCharacters.some((character) => character.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
        };
      }



    case GET_FAV:

      return {
        ...state,
        myFavorites: action.payload,
      };
 

    case ADD_CHARACTER_FAV:
      if (state.allCharacters.some((character) => character.id === action.payload.id)) {
        return state;
      } else {
        return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.allCharacters, action.payload],
        };
      }

    case DELETE_CHARACTER_FAV:
      return {
        ...state,
        myFavorites: [
          ...state.myFavorites.filter(
            (character) => character.id !== action.payload
          ),
        ],
      };

    case FILTER:

      return {
        ...state,
        myFavorites: [...state.allCharacters.filter((character) => {

          return character.gender === action.payload
        })],
      };

    case ORDER:
      
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? [
                ...state.allCharacters.sort(function (a, b) {
                  return a.id - b.id;
                }),
              ]
            : [
                ...state.allCharacters.sort(function (a, b) {
                  return b.id - a.id;
                }),
              ],
      };

    default:
      return state;
  }
};
