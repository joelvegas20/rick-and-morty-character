import React from 'react'
// import ParticleComponent from './ParticleComponent'
import logo from '../assets/images/logo.svg'
// import rickHome from '../assets/images/rickHome.png'
import { PrincipalContainer, RickContainer , LogoContainer, RickImage } from '../assets/styles/views/LandingStyle'

export default function Landing() {
  return (
    <PrincipalContainer>
      <LogoContainer>
        <img src={logo} alt="logo"/>
      </LogoContainer>
      <RickContainer>
        {/* <img src={rickHome} alt="logo" /> */}
        <RickImage/>
      </RickContainer>

    </PrincipalContainer>
  )
}
