import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponents from '../subComponents/LogoComponents'
import PowerButton from '../subComponents/PowerButton'
import SocialIcon from '../subComponents/SocialIcon'
import Intro from './Intro'
import { YinYang } from './AllSvg'
import { keyframes } from 'styled-components'
import { useState } from 'react'
import { motion } from 'framer-motion';


const Main = () => {

  const [click, setClick ] = useState(false); 

  const handleClick = () => setClick( prev => !prev);

  return (
    <MainContainer>
      <DarkDiv click = {click} />
      <Container>

        <PowerButton />
        <LogoComponents theme={click ? 'dark' : 'light'} />
        <SocialIcon click={click} theme={click ? 'dark' : 'light'} />

        <Center click = {click}>
          <YinYang width={ click ? 120 : 200 } height={ click ? 120 : 200 } fill="currentColor" onClick = { handleClick } />
          <span>Click Here</span>
        </Center>


        <Contact href='mailto:zawnaingo002345@gmail.com' target="_blank" click={click} >
          <motion.h2
            initial = {{ 
              y: -200,
              transition: { type: 'spring', duration: 1.5, delay: 1}
             }}
             animate = {{ 
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1}
             }}
            whileHover={{ scale: 1.1 }}
            whileTap = {{ scale: 0.9 }}
          >
            Say hi...
          </motion.h2>
        </Contact>


        <Work to="./work" click={click} >
        <motion.h2
          initial = {{ 
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1}
          }}
          animate = {{ 
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1}
          }}
          whileHover={{ scale: 1.1 }}
          whileTap = {{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </Work>

        <BottomBar>
          <About to="./about" click={click} >
          <motion.h2
            initial = {{ 
              y: 200,
              transition: { type: 'spring', duration: 1.5, delay: 1}
            }}
            animate = {{ 
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1}
            }}
            whileHover={{ scale: 1.1 }}
            whileTap = {{ scale: 0.9 }}
          >
            About
          </motion.h2>
          </About>

          <Skill to="./skill" >
          <motion.h2
            initial = {{ 
              y: 200,
              transition: { type: 'spring', duration: 1.5, delay: 1}
            }}
            animate = {{ 
              y: 0,
              transition: { type: 'spring', duration: 1.5, delay: 1}
            }}
            whileHover={{ scale: 1.1 }}
            whileTap = {{ scale: 0.9 }}
          >
            Skills
          </motion.h2>
          </Skill>
        </BottomBar>

      </Container>
      { click && <Intro click = {click} /> }
    </MainContainer>
  )
}

export default Main

const rotate = keyframes`
  from {
      transform : rotate(0)
  }
  to {
    transform : rotate(360deg)
}
`

const MainContainer = styled.div`
  //  background : ${ props => props.theme.body };
  background: #caf0f8;

   width: 100vw;
   height : 100vh;
   overflow: hidden;

   position: relative;

   h2,h3,h4,h5,h6 {
     font-weight: 500;
     font-family:'Karla', sans-serif ;
   }

   @media screen and (max-width:420px) {
    h2,h3,h4,h5,h6 {
      font-size: 1.2em;
    }
    opacity: 1;
   }

   @media screen and (max-width:400px) {
    h2,h3,h4,h5,h6 {
      font-size: 1.17em;
    }
   }
`;

const Container = styled.div`
   padding: 2rem;
`;
   

const Contact = styled.a`
   color: ${props => props.theme.text};
   position: absolute;
   top: 2rem;
   right: 2rem;
   text-decoration: none;
   font-family: Karla, sans-serif;
   font-weight: 500;
   z-index: 1;

   @media screen and (max-width:420px) {
    right: calc(1rem + 2vw);
    color: ${props => props.click && props.theme.body};
   }

   @media screen and (max-width:400px) {
    right: calc(1rem + 2vw);
    color: ${props => props.click && props.theme.body};
   }   
`;

const Work = styled(Link)`
   color: ${props => props.theme.text};
   position: absolute;
   top: 50%;
   right: 2rem;
   text-decoration: none;
   transform: rotate(90deg) translate(-50% ,-50%);
   z-index: 1;

   @media screen and (max-width:620px) {
    right: calc(1rem + 2vw);
    text-shadow: rgb(0 0 0) 0px 0px 4px;
    top: 51%;
   }

   @media screen and (max-width:420px) {
    right: calc(1rem + 2vw);
    color: ${props => props.click && props.theme.body};
    top: 51%;
   }
`;

const BottomBar = styled.div`
   position: absolute;
   bottom: 1rem;
   left: 0;
   right: 0;
   width: 100%;
   
   display: flex;
   justify-content: space-evenly;
`;

const About = styled(NavLink)`
   color: ${props => props.click ? props.theme.body : props.theme.text};
   text-decoration: none;
   z-index: 1;

   @media screen and (max-width:420px) {
    color: ${props => props.theme.text};
  }
`
const Skill = styled(NavLink)`
   color: ${props => props.theme.text};
   text-decoration: none;
   z-index: 1;
`

const Center = styled.button`
    position: absolute;
    top: ${props => props.click ? '85%' : '50%' };
    left :  ${props => props.click ? '92%' : '50%' };
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    transform: translate(-50% ,-50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition:  all 1s ease;

    &>:first-child {
      animation: ${rotate} infinite 1.5s linear;
    }

    &>:last-child {
      display: ${props => props.click ? 'none' : 'inline-block'};
      padding-top: 1rem;
    }

    @media screen and (max-width:1024px) {
      top: ${props => props.click && '85%' };
      left :  ${props => props.click && '92%' };
      width: ${props => props.click ? '120px' : '170px' };
      height :  ${props => props.click ? '120px' : '170px' };
     }

     @media screen and (max-width:768px) {
      top: ${props => props.click && '90%' };
      left :  ${props => props.click && '90%' };
      width: ${props => props.click ? '80px' : '170px' };
      height :  ${props => props.click ? '80px' : '170px' };
     }

     @media screen and (max-width:620px) {
      width: ${props => props.click ? '80px' : '150px' };
      height :  ${props => props.click ? '80px' : '150px' };
     }

     @media screen and (max-width:420px) {
      width: ${props => props.click ? '40px' : '150px' };
      height :  ${props => props.click ? '40px' : '150px' };
     }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${props => props.click ? '50%' : '0%' };
  height:  ${props => props.click ? '100%' : '0%' };
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;

  @media screen and (max-width:420px) {
    width: ${props => props.click ? '100%' : '0%' };
    height:  ${props => props.click ? '50%' : '0%' };
    right: ${props => props.click && '0' };
    transition: width 0.5s ease 0s, height 1s ease 0.5s;
  }

`

