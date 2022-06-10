import React from 'react'
import styledComponents from 'styled-components'
import Particles from 'react-particles-js'

// https://vincentgarreau.com/particles.js/
// particle config file
import configDark from '../config/particlesjs-config.json'
import configLight from '../config/particlesjs-config-light.json'

const ParticleComponent = (props) => {
  return (
    <Box>
        <Particles  className='parti' params={ props.theme === 'light' ? configLight : configDark} />
    </Box>
  )
}

export default ParticleComponent

const Box = styledComponents.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;


    @media screen and (max-width: 1024px) {
      height: 100% !important;

     .parti {
       height: 100% !important;
      }
    }
`