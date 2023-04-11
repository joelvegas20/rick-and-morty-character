import styled from "styled-components";
import characterBackground from "../../../images/characterBackground.svg";

export const CharactersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: Quicksand, sans-serif;
  color: white;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  margin-bottom: 1rem;
`;

export const CardsContainerBackground = styled.div`
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  position:fixed;
  background: url(${characterBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  box-shadow: -20px 20px 10px 0 rgba(0, 0, 0, 0.2);
  width:82%;
  height: 70vh;
`;

export const CharacterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 88%;

  ::-webkit-scrollbar {
    display: none;
  }
`;
