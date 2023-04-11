import styled from "styled-components";
import imagen from '../../../images/rick_background_form.jpeg'


export const ContainerBackground = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${imagen});
    background-position:center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    
`


export const FormContainer = styled.div`
  /* General Style ( Phone ) */
  background-color: #efefef;
  color: #040b1d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-family: Quicksand, sans-serif;

  /* Phone Media */
  width: 85%;
  height: 80%;

  /* Tablet Style */
  @media (min-width: 500px) {
    max-width: 400px;
  }
  
  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2rem;
  /* font-size: 3rem; */
  font-weight: 900;
  color: #040b1d;
  margin-bottom:20px;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const LabelForm = styled.label`
  padding-left: 10px;
  font-size: 1.3rem;
  font-weight: 900;
  width: 65%;
  /* width: 80%; */
  /* margin-bottom: 10px; */
`;


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  width: 100%;
  /* height: 150px;
  width: 100%; */
  align-items:center;

  /* background:green; */
`;

export const InputForm = styled.input`
  height: 50px;
  width: 65%;
  background: #efefef;
  border: 2.5px solid #040b1d;
  border-radius: 5px;
  color: #040b1d;
  padding: 0px 10px;
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: 600;
  /* focus: #040B1D    */

  &:focus {
    background-color: white;
  }

  &:not(:placeholder-shown) {
    background-color: white;
  }
`;


export const ButtonForm = styled.button`
  background-color: #040b1d;
  color: #efefef;
  font-size: 1rem;
  font-weight: 900;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  width: 65%;
  /* width: 80%; */
  margin: 0 17.5%;
  height: 50px;
`;

export const ErrorContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 400px;
  /* background:red; */
`;

export const ErrorP = styled.span`
  color: red;
  max-width: 55%;
  text-align: center;
  text-wrap: wrap;
  font-size: 1rem;

  font-weight: 600;
  /* background:green; */
  margin: 0;
`;
