import styled from "styled-components";

export const CardsContainer = styled.div`
  /* position: absolute; */
  top: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
  z-index: 2;

  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }


`;
