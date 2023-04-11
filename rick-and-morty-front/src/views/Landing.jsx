import styled from "styled-components";
import Cards from "../components/cards/Cards";
import NavBar from "../components/navBar/NavBar";
import Particle from "../components/particles/Particles";
import rickandmorty from "../assets/images/rickandmorty.png";
import rick from '../assets/images/rickHome.png'
import logoRM from '../assets/images/logo.svg'
import arrow from '../assets/icons/arrow2.svg'
import linkedin from '../assets/icons/linkedin.svg'
import github from '../assets/icons/github.svg'
import { LandingContainer, LogoRM, RickImage, RMImage, SocialContainer, SocialIcon } from "../assets/styles/components/landing/Landing.style";
import Detail from "./Detail";
import Favorites from "../components/favorites/Favorites";


const ArrowImg = styled.img`

  
`

export default function Landing() {
  return (

    <LandingContainer>
      <Particle />
      <RMImage src={rickandmorty} alt="rickandmorty" border="0" />
      <LogoRM  src={logoRM} />
      <RickImage src={rick} alt='rick' />
      <SocialContainer>
      <ArrowImg src={arrow} />
      <a href="https://www.linkedin.com/in/joelvegas/" target='_blank' >
      <SocialIcon src={linkedin} />
      </a>
      <a href="https://github.com/JOEL18VEGAS" target="_blank" >
      <SocialIcon src={github} />
      </a>
      </SocialContainer>
      {/* <Cards characters={characters} onClose={onClose} /> */}
    </LandingContainer>

  );
}
