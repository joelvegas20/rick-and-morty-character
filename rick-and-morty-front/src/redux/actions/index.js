import axios from "axios";

export const ADD_CHARACTER_FAV = "favorites/addfavorites";
export const DELETE_CHARACTER_FAV = "favorites/deleteFavorites";
export const FILTER = "favorites/filter";
export const ORDER = "favorites/order";
export const GET_FAV ="favorites/get"
export const ADD_CHARACTER = "characters/addCharacters";
export const GET_CHARACTERS = "characters/getCharacters";

// export const addCharacters = (data) => {

//   console.log(data)

//   return { type: ADD_CHARACTER, payload: data }


// };

// export const getCharacters = () => {

//   return { type: GET_CHARACTERS  }

// };


export const getFavorites = ()=> {

  return async (dispatch) => {

    try {
      
      const response = await axios.get(`http://localhost:3001/rickandmorty/fav`)

      dispatch({type: GET_FAV , payload: response.data})

    } catch (error) {
      console.log(error.message)
    }

  }
}

export const addFavorites = (character) => {
  return async (dispatch) => {
    try {

      const response = await axios.post("http://localhost:3001/rickandmorty/fav", character , { withCredentials: true });
      dispatch({ type: ADD_CHARACTER_FAV, payload: response }); 
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorites = (id) => {


  return async (dispatch)=> {

    try {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)

    dispatch(
      { type: DELETE_CHARACTER_FAV, payload: id }
    )
    } catch (error) {
      console.log(error.message)
    }
  }
};

export const filterCards = (gender) => {
  return { type: FILTER, payload: gender };
};

export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
