import "./App.css";
import SearchBar from "./components/searchBar/SearchBar";

import { Route, Routes, useLocation } from "react-router-dom";

import Landing from "./views/Landing";
import { NavBar } from "./components/NavBar/NavBar";
import Login from "./views/Login";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App" style={{ padding: "25px" }}>
      {pathname !== "/login" && <NavBar></NavBar>}

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/characters"
          element={
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
          }
        ></Route>
      </Routes>
      {/* <div>
        <Cards
          characters={characters}
        />
      </div> */}
    </div>
  );
}

export default App;
