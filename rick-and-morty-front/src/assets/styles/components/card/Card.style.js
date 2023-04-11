import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardNameLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 20px;
`;

export const CardContentContainer = styled.div`
  position: relative;
  border: 4px solid white;
  border-radius: 5px;
  margin: 20px;
  width: 170px;
  height: 170px;
  font-weight: 700;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  background-color: #040b1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  height: 310px;
  width: 310px;
  color: white;
  margin-bottom: 30px;
  box-shadow: -8px 4px 6px 3px #00000065;

  ${CardNameLink} {
    color: white;
    text-decoration: none;
  }

  &:hover {
    background: var(--background-image);
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
    color: #040b1d;

    ${CardNameLink} {
      color: #040b1d;
    }

    ${CardContentContainer} {
      border-color: #040b1d;
    }
  }
`;

export const CardName = styled.span`
  flex-wrap: wrap;
  margin: 0 15px;
  font-size: 20px;
  font-weight: 700;
`;

export const CardOrigin = styled.span`
  position: absolute;
  text-wrap: wrap;
  hyphens: auto;
  top: 2px;
  left: 10px;
`;

export const CardStatus = styled.span`
  position: absolute;
  right: 2px;
  top: 8px;
  writing-mode: tb-rl;
  transform: rotate(-180deg);
`;

export const CardSpecieContainer = styled.div`
  display: flex;
  height: 170px;
  justify-content: center;
  align-items: center;
`;

export const CardSpecie = styled.span`
  font-weight: 800;
  font-size: 96px;
`;

export const CardId = styled.span`
  position: absolute;
  bottom: 0;
  left: 10px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0px 20%;
`;

export const ButtonHeart = styled.button`
  background-color: transparent;
  border: none;
`;
