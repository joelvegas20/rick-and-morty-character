import React from "react";
import { ButtonLi, ButtonLink, LinkStyled, NavBarContainer, NavLi, NavList } from "../../assets/styles/components/navBar/NavBar.style.js";
import SearchBar from "../searchBar/SeatchBar";
import arrow from "../../assets/images/arrow.png"
import styled from "styled-components";

const ArrowUp = styled.img`
  margin-top:30px;
  width:7px;
  user-select:none;

`
const ArrowDown = styled.img`
  width:7px;
  transform: rotate(180deg);
  user-select:none;
`

export default function NavBar({ onSearch, logout }) {

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    component.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavBarContainer>
      <ArrowUp src={arrow} alt="arrow" />
      <NavList>
        <ButtonLi>
          {/* <NavButton onClick={logout}>Logout</NavButton> */}
          <ButtonLink onClick={logout}>Logout</ButtonLink>
        </ButtonLi>
        <NavLi>
          <LinkStyled to="/" onClick={() => scrollToComponent('Home')} >Home</LinkStyled>
        </NavLi>
        <NavLi>
          <LinkStyled to="/favorites">Favorites</LinkStyled>
        </NavLi>
        <NavLi>
          <LinkStyled to="/characters">Characters</LinkStyled>
        </NavLi>
        <NavLi>
          <LinkStyled to="/about">About</LinkStyled>
        </NavLi>
      </NavList>
      <ArrowDown  src={arrow} alt="arrow"/>
      {/* <SearchBar onSearch={onSearch} /> */}
    </NavBarContainer>
  );
}
