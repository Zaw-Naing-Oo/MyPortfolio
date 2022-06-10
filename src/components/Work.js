import React from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from '../components/Theme'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import { Work } from '../data/WorkData'
import Card from '../subComponents/Card'
import { useRef, useEffect } from 'react'
import { YinYang } from './AllSvg'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'


const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    }
  }
}


const WorkPage = () => {

  const ref = useRef(null);
  const YinYangRef = useRef(null);

  useEffect( () => {
    let element = ref.current;
    let YinYangElement = YinYangRef.current;
   
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      YinYangElement.style.transform = `rotate(` + -window.pageYOffset + `deg)`;
      
      
    }

    window.addEventListener('scroll', rotate);
    
    return () =>  window.removeEventListener('scroll', rotate);
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>

        <LogoComponents theme='dark'/>
        <SocialIcon theme='dark'/>
        <PowerButton />
        {/* <ParticleComponent theme="dark" />  */}


        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {
            Work.map( data => <Card key={data.id} data={data} /> )
          }
        </Main>

        <Rotate ref={YinYangRef}>
            <YinYang width={80} height={80} fill= '#caf0f8' />
        </Rotate>

        <BigTitle id='bigTitle' text="Projects" top="10%" right="30%" />

      </Box>
    </ThemeProvider>
  )
}

export default WorkPage

const Box = styledComponents.div`
    background-color: ${props => props.theme.body};
    height: 400vh;
    position: relative;
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 400px) {
      & > :nth-child(6) {
        position: fixed !important;
        top: 80%;
        right: 4%;
      };
    }

    @media screen and (max-width: 420px) {
      & > :nth-child(6) {
        position: fixed !important;
        top: 80%;
        right: 4%;
      };
    }
`;

const Main = styledComponents(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;


  @media screen and (max-width: 1024px) {
    opacity: 1;
    left: calc(8rem + 15vw);
    top: 20%;
  }

  @media screen and (max-width: 820px) {
    opacity: 1;
    left: calc(8rem + 15vw);
    top: 24%;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
    left: calc(8rem + 15vw);
    top: 23%;
  }

  @media screen and (max-width: 620px) {
    opacity: 1;
    left: calc(2rem + 15vw);
    top: 28%;
  }

  @media screen and (max-width: 420px) {
    opacity: 1;
    left: calc(2rem + 15vw) !important;
    top: 28% !important;
  }

  @media screen and (max-width: 400px) {
    opacity: 1;
    left: calc(1rem + 15vw) !important;
    top: 28% !important;
  } 
`;

const Rotate = styledComponents.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;

  @media screen and (max-width: 620px) {
    width: 60px !important;
    height: 60px !important;

    svg {
      width: 60px;
      height: 60px;
    }
  }

  @media screen and (max-width: 420px) {
    width: 60px !important;
    height: 60px !important;

    svg {
      width: 60px !important;
      height: 60px !important;
    }
  } 

   @media screen and (max-width: 400px) {

    width: 50px !important;
    height: 50px !important;

    svg {
      width: 50px !important;
      height: 50px !important;
    }
  }
`;

