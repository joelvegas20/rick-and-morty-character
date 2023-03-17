import { React } from "react";
import { useLocation } from "react-router-dom";
import {
  ImgArrow,
  LinkStyled,
  NavBarContainer,
  NavLi,
  NavList,
} from "../../assets/styles/components/navBar/navBarStyle";
import SearchBar from "../searchBar/SearchBar";

import arrowU   from "../../assets/icons/arrowUp.svg";
import arrowD from "../../assets/icons/arrowDown.svg"

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <NavBarContainer>
      <div>  
      <ImgArrow src={arrowU}  alt="arrow"/>
      </div>
      <div className=".gg-arrow-long-right-e"></div>
      <NavList>
        <NavLi>
          <LinkStyled to="/about">About</LinkStyled>
        </NavLi>
        {/* Characters Link */}
        <NavLi>
          <LinkStyled to="/characters">Characters</LinkStyled>
        </NavLi>
        {/* Favourites Link */}
        <NavLi>
          <LinkStyled to="/login">Favorites</LinkStyled>
        </NavLi>
        {/* Home Link */}
        <NavLi>
          <LinkStyled to="/">Home</LinkStyled>
        </NavLi>
      </NavList>
      <div>  
      <ImgArrow src={arrowD}  alt="arrow"/>
      </div>
      {pathname === "/characters" && <SearchBar />}
    </NavBarContainer>
  );
};
