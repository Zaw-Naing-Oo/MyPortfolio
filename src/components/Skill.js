import React from 'react'
import styledComponents from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../components/Theme'
import LogoComponents from '../subComponents/LogoComponents'
import SocialIcon from '../subComponents/SocialIcon'
import PowerButton from '../subComponents/PowerButton'
import {Design, Develope} from './AllSvg'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skill = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      
      <Box>
        <LogoComponents theme='light'/>
        <SocialIcon theme='light'/>
        <PowerButton />
        
        {/*  jsparticles */}
        <ParticleComponent theme="light" />


        <Main>
          <Title>
            <Design width={40} height={40} /> <span>Designer</span>
          </Title>

          <Description>
            I love to create design which speaks, Keep it clean, minimal and simple.
          </Description>

          <Description>
            <strong>I like to Design</strong>
            <ul>
                <li>
                    Web Design
                </li>
            </ul>
          </Description>

          <Description>
            <strong>Tools</strong>
            <ul>
                <li>
                  Figma
                </li>
            </ul>
          </Description>
        </Main> 


        <Main>
          <Title>
            <Develope width={40} height={40} /> <span>Frontend Developer</span>
          </Title>

          <Description>
            I value business or brand for which i'm creating, thus i enjoy bringing new ideas to life.
          </Description>

          <Description>
            <strong>Skills</strong>
            <p>
            Html, Css, Js, React, Redux, Bootstrap, Tailwind, Php, Laravel.
            </p>
          </Description>

          <Description>
            <strong>Tools</strong>
            <p>
            VScode, Github, Phpstorm.
            </p>
          </Description>
        </Main>

        <BigTitle  id="bigTitle" text="Skills" top="80%" right="30%" />
      </Box>

    </ThemeProvider>
  )
}

export default Skill

const Box = styledComponents.div`
    background: #caf0f8;
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: "Ubuntu Mono", monospace;



    @media screen and (max-width: 1024px) {
      opacity: 1;
      overflow: hidden;
    }


    @media screen and (max-width: 768px) {
      opacity: 1;
      display: flex;
      flex-direction: column;
      padding: 8rem 0px;
      height: auto;

      & > :nth-child(5) {
        margin-bottom: 4rem;
      };

      & > :nth-child(7) {
        position: fixed !important;
        top: 80%;
        right: 30%;
        font-size: calc(5rem + 5vw) !important;
        z-index: 0 !important;
        margin-top: 2rem;
      };
    }


    @media screen and (max-width: 620px) {
      opacity: 1;
      display: flex;
      flex-direction: column;
      padding: 8rem 0px;
      height: auto;

      & > :nth-child(5) {
        margin-bottom: 4rem;
      };

      & > :nth-child(7) {
        position: fixed !important;
        top: 80% !important;
        right: 20% !important;
        font-size: calc(5rem + 5vw) !important;
        z-index: 0 !important;
        margin-top: 2rem;
      };
    }

   
    @media screen and (max-width: 420px) {
      opacity: 1;
      display: flex;
      flex-direction: column;
      padding: 8rem 0px;
      height: auto;

      & > :nth-child(5) {
        margin-bottom: 4rem;
      };

      & > :nth-child(7) {
        display: none !important;
       };
    }

    @media screen and (max-width: 400px) {
      opacity: 1;
      flex-direction: column;
      padding: 8rem 0px;
      height: auto;

      & > :nth-child(5) {
        margin-bottom: 4rem;
      };

      & > :nth-child(7) {
       display: none !important;
      };
    }
`;

const Main = styledComponents(motion.div)`
   border: 2px solid ${props => props.theme.text};
   width: 30vw;
   height: 60vh;
   color: ${props => props.theme.text};
   background: #caf0f8;
   padding: 2rem;
   z-index: 3;
   line-height: 1.5;

   &:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
  }

  @media screen and (max-width: 1024px) {
    width: 30vw;
    height: 55vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  

  @media screen and (max-width: 768px) {
    width: 50vw !important;
    height: max-content !important;
  }

  @media screen and (max-width: 620px) {
    width: 50vw !important;
    height: max-content !important;
  }

 
  @media screen and (max-width: 420px) {
    width: 50vw !important;
    height: max-content !important;
    margin-left: 2rem !important;
  }

  @media screen and (max-width: 400px) {   
    width: 50vw !important;
    height: max-content !important;
    margin-left: 2rem !important;
  }
`;

const Title = styledComponents.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover   & {
      &>*{
          fill:${props => props.theme.body
        };
      }
  }

  &>*:first-child{
  margin-right: 1rem;
  }



  @media screen and (max-width: 1024px) {
    font-size: calc(0.8em + 1vw);
  }


  @media screen and (max-width: 768px) {   
    font-size: calc(1em + 2vw);
    margin-bottom: 1rem;

    svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (max-width: 620px) {   

    & > :nth-child(1) {
      flex: 1;
    };

    & > :nth-child(2) {
      flex: 2;
    };
  }

  @media screen and (max-width: 420px) {   
    font-size: calc(1em + 1vw);
  }


  @media screen and (max-width: 400px) {   
    font-size: calc(0.8em + 1vw);

    svg {
      width: 30px;
      height: 30px;
    }
  }

`;


const Description = styledComponents.div`
  color: ${props => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color:${props => props.theme.body};    
  }


  @media screen and (max-width: 1024px) {
    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    ul {
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
    }
  }


  @media screen and (max-width: 768px) {   
    font-size: calc(0.8em + 1vw);

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    ul {
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
    }
  }


  @media screen and (max-width: 620px) {   
    font-size: calc(0.8em + 1vw);

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    ul {
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
    }
  }


  @media screen and (max-width: 420px) {   
    font-size: calc(0.7em + 1vw);

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    ul {
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
    }
  }

  @media screen and (max-width: 400px) {   
    font-size: calc(0.5em + 1vw);

    strong {
      margin-bottom: 1rem;
      text-transform: uppercase;
      font-weight: bolder;
    }

    ul {
      margin-left: 2rem;
    }

    p {
      margin-left: 2rem;
    }
  }
`;