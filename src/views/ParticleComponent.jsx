import React from "react";
import Particles from "react-tsparticles";
import {particlesConfig} from "./particles-config.js";

class ParticleComponent extends React.Component {


  render() {
    return (
        <Particles options={
            {
                background: {
                    color: "#404040"
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        resize: true
                    }
                },
                particles: {
                    color: {
                        value: "#56d32c"
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1080
                        },
                        limit: 0,
                        value: 400,
                    
                    },
                    opacity: {
                        animation: {
                            enable:true,
                            minimumValue: 0.05,
                            speed: 1,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue:0.05
                        },
                        value:1
                    },
                    shape: {
                        type: "circle"
                    },
                    size:{
                        random: {
                            enable: true,
                            minimumValue: 0.05
                        },
                        value:1
                    }

                }

                

            }
        }>

      </Particles>
    );
  }
}

export default ParticleComponent;
