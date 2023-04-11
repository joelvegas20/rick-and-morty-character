import { useState } from "react";
import {
  ButtonForm,
  FormContainer,
  InputContainer,
  InputForm,
  LabelForm,
  TitleForm,
  ErrorP,
  ErrorContainer,
  ContainerBackground
} from "../../assets/styles/components/form/Form.style";

export default function Form({ login , title  }) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const validation = (name, value) => {
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "password") {
      if (value.trim() === "") {
        setError({ ...error, password: "La contraseña es obligatoria." });
      } else if (value.length < 8) {
        setError({
          ...error,
          password: "La contraseña debe tener al menos 8 caracteres.",
        });
      } else {
        setError({ ...error, password: "" });
      }
    }

    if (name === "email") {
      if (value.trim() === "") {
        setError({ ...error, email: "El correo electrónico es obligatorio." });
      } else if (!emailRegExp.test(value)) {
        setError({ ...error, email: "El correo electrónico no es válido." });
      } else {
        setError({ ...error, email: "" });
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    // console.log(userData)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    validation(name, value);
    setUserData({ ...userData, [name]: value });
  };

  return (
    <ContainerBackground>
    <FormContainer>
      <TitleForm>{title}</TitleForm>

      <form onSubmit={handleSubmit}>
        <InputContainer>
          <LabelForm>Email:</LabelForm>
          <InputForm
            name="email"
            value={userData.email}
            onChange={(event) => {
              return handleInputChange(event);
            }}
            type="text"
            placeholder="Insert your email"
          />
          <ErrorContainer>
          <ErrorP>{error.email}</ErrorP>
          </ErrorContainer>
        </InputContainer>
        <InputContainer>
          <LabelForm>Password:</LabelForm>
          <InputForm
            name="password"
            value={userData.password}
            onChange={(event) => handleInputChange(event)}
            type="text"
            placeholder="Insert your password"
          />
          <ErrorContainer>
          <ErrorP>{error.password}</ErrorP>
          </ErrorContainer>
        </InputContainer>
        <ButtonForm type="submit">Sing In</ButtonForm>
      </form>
    </FormContainer>
    </ContainerBackground>
  );
}
