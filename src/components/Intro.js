import React from 'react'
import styled from 'styled-components';
import me from '../assets/Images/profile-img.png'
import { motion } from 'framer-motion';

const Intro = (props) => {
  return (
    <Box
     initial ={{ height: 0 }}
     animate = {{ height: '55vh' }}
     transition = {{ type: 'spring', duration: 2, delay: 1 }}
    >
        <SubBox>
            <Text>
                <h1>Hi,</h1>
                <h3>I'm Zaw Naing Oo</h3>
                <h6>I design and Code simple yet beautiful websites</h6>
            </Text>
        </SubBox>
        <SubBox>
            <motion.div
              initial = {{ opacity: 0 }}
              animate = {{ opacity: 1 }}
              transition = {{  duration: 1, delay: 2 }}
              style = {{ 'opacity': 1 }}
            >
                <img src={me} className='pic' alt='Zaw Naing Oo' />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro;

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    height:55vh;
    display: flex;
    background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;

    @media screen and (max-width: 400px) {
        height: 70vh !important;
        width: 70vw !important;
        flex-direction: column;
        justify-content: space-between;
        background: no-repeat;
        border: none;
    }

    @media screen and (max-width: 420px) {
        height: 70vh !important;
        width: 70vw !important;
        flex-direction: column;
        justify-content: space-between;
        background: no-repeat;
        border: none;
    }
`
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;

    .pic{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
        height: 50%;
        position: relative;
        display: flex;


        .pic{
            width: 90% !important;
            bottom: 0 !important;
        }
    }

    @media screen and (max-width: 420px) {
        width: 100%;
        height: 50%;
        position: relative;
        display: flex;

        .pic{
            width: 90% !important;
            bottom: 0 !important;
        }
    }

    @media screen and (max-width: 620px) {
        .pic{
            bottom: 31%;
        }
    }

    @media screen and (max-width: 1024px) {
        .pic{
            bottom: 31%;
        }
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)` };
        font-size: calc(0.5rem + 1.5vw);
        font-weight:300;
    }

    @media screen and (max-width: 400px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: calc(1rem + 1.5vw);

        &>*:last-child{
            font-size : calc(0.8rem + 1vw);
            font-weight:300;
        }
    
    }

    @media screen and (max-width: 420px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: calc(1rem + 1.5vw);

        &>*:last-child{
            font-size : calc(0.8rem + 1vw);
            font-weight:300;
        }
    
    }

    @media screen and (max-width: 620px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        font-size: calc(1rem + 1.5vw);

        &>*:last-child{
            font-size : calc(0.8rem + 1vw);
            font-weight:300;
        }
    
    }
`;