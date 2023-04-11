import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Landing from "./views/Landing";
import About from   "./views/About";
import Detail from  "./views/Detail"

import NavBar from  "./components/navBar/NavBar";
import Error from "./views/Error";
import Login from "./views/Login";
import Favorites from "./components/favorites/Favorites";
import Register from "./views/Register";
import Character from "./views/Character";

function App() {
  
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const navigate = useNavigate()


  const {pathname} = useLocation()


  useEffect(() => {

    if(!access && pathname !== "/login" && pathname !== "/register"){
      navigate("/login")
    }

 }, [access]);

  const onClose = (id) => {
    setCharacters((characters) => [
      ...characters.filter((character) => character.id !== id),
    ]);
  };

  const login = (userData)=> {

    const {email , password } = userData

    if(email.trim() === "joeltest@gmail.com"  && password.trim() === "12345678" ){

      setAccess(true)
      navigate("/")
    
    }

  }

  const logout = ()=> {
    setAccess(false)
    navigate("/login")
  }

  const onSearch = (character) => {
    axios
      .get(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then(({ data }) => {
        if (
          data.name &&
          !characters.find((character) => character.id === data.id)
        ) {
          setCharacters((characters) => [...characters, data]);
        } else {
          // IMPORTANT: borrar al terminar
          console.log("ya existe");
        }
      })
      .catch(() => window.alert("No hay personajes con ese ID"));
  };

  return (
    <div className="App">
      {
     
        pathname !== "/login" && pathname !== "/register" && <NavBar logout={logout} />
      }
      <Routes>
        <Route
          path="/"
          element={<Landing />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/characters" element={<Character characters={characters} onClose={onClose} onSearch={onSearch}  />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register  />} />
        <Route path="/favorites" element={<Favorites/>}  />
      <Route 
        path="*" element={<Error/>}
      />
      </Routes>
    </div>
  );
}

export default App;
