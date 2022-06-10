import React from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../components/Theme'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import spaceMan from '../assets/Images/spaceman.png'
import { keyframes } from 'styled-components'
import BigTitle from '../subComponents/BigTitle'



const   About = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>

        <LogoComponents theme='dark'/>
        <SocialIcon theme='dark'/>
        <PowerButton />
        <ParticleComponent theme="dark" /> 

        <SpaceMan>
          <img src={spaceMan} alt='spaceman' />
        </SpaceMan>

        <Main>
            <span>I'm a front-end developer located in Myanmar. I love to create simple  beautiful websites with great user experience.</span>

             <span>I'm interested in the whole frontend stack Like trying new things and building great projects. I love to read books  and learn new things.</span>

            <span>I believe everything is an Art when you put your consciousness in it. You can connect with me via social links.</span>
        </Main>

        <BigTitle text="About" top="10%" right="50%" />

      </Box>
    </ThemeProvider>
  )
}

export default About

const Box = styledComponents.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 620px) {
      opacity: 1;

      & > :nth-child(7) {
        position: fixed !important;
        top: 84%;
        right: 27%;
      };
    }

    @media screen and (max-width: 420px) {
      opacity: 1;

      & > :nth-child(7) {
        position: fixed !important;
        top: 79%;
        right: 17%;
      };
    }

    @media screen and (max-width: 400px) {
      opacity: 1;
    }
`;

const ani = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translateX(15px) translateY(15px) }
  100% { transform: translateY(-10px) }
`

const SpaceMan = styledComponents.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${ani} 5s ease infinite;


  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styledComponents.div`
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5rem;
  

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
    line-height: 2rem;
  

    span {
      margin-top: 1.8rem;
    }
  }


  @media screen and (max-width: 620px) {
    width: 60vw;
    height: 50vh;
    backdrop-filter: none;
    margin-top: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      margin-top: 1rem;
    }

  }

  @media screen and (max-width: 420px) {
    width: 50vw;
    height: auto;
    backdrop-filter: none;
    margin-top: -1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    span {
      margin-top: 1rem;
      line-height: 1.4rem;

    }

  }

`;


