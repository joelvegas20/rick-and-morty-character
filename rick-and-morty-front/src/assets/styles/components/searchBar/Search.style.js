import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* background-color: #040b; */
  width: 40%;
  /* height: 100px; */

  padding: 0.2rem;
`;

export const InputSearch = styled.input`
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 10px;
  width: 240px;
  border-radius: 14px;
  color: white;
  font-family: Quicksand, sans-serif;
  font-size: 1rem;
  font-weight: 700;


  /* placeholder */
  &::placeholder {

    color: white;
  }

`;

export const ButtonSearch = styled.button`
  background-color: white;
  color: #040b1d;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  font-family: Quicksand, sans-serif;
  cursor: pointer;
  &:hover {
    /* oscurece un poco */
    background-color: #e6e6e6;
    /* background-color: */
  }
`;
