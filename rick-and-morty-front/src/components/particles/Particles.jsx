import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { loadSlim } from "tsparticles-slim";


const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;


export default function Particle() {

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return (
    <ParticleContainer>
    <Particles
      init={particlesInit}
      options={{
        // background: {
        //   color: {
        //     value: "#040B1D",
        //   },
        // },
        fpsLimit: 120,
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },

          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
        },
      }}
    />
    </ParticleContainer>
  );
}
