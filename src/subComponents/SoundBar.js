import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import styledComponents from 'styled-components'
import { keyframes } from 'styled-components'
import music from '../assets/audio/Alan-Walker-Faded-Instrumental-_-AllNaijaEntertainment.com_.mp3'

const SoundBar = () => {
    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click) {
            ref.current.play();
        }else {
            ref.current.pause();
        }
    }

  return (
    <Box onClick={ () => handleClick()}>
       <Line click={click} /> 
       <Line click={click} /> 
       <Line click={click} /> 
       <Line click={click} /> 
       <Line click={click} /> 
       <audio src={ music } ref={ref} loop/>
    </Box>
  )
}

export default SoundBar

const Box = styledComponents.div`
    display:flex;
    cursor:pointer;
    position:fixed;
    left:8rem;
    top:2.5rem;
    z-index:10;

    &>*:nth-child(1){
        animation-delay: 0.2s;
    }
    &>*:nth-child(2){
        animation-delay: 0.3s;
    }
    &>*:nth-child(3){
        animation-delay: 0.4s;
    }
    &>*:nth-child(4){
        animation-delay: 0.5s;
    }
    &>*:nth-child(5){
        animation-delay: 0.8s;
    }

    @media screen and (max-width:400px) {
        left: 1rem;
        top: 10rem;
    }

    @media screen and (max-width:420px) {
        left: 1rem;
        top: 10rem;
    }

    @media screen and (max-width:620px) {
        left: 1rem;
        top: 10rem;
    }
    `;

const linePlay = keyframes`
    0% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(2);
    }
    100% {
        transform: scaleY(1);
    }
`

const Line = styledComponents.span`
    background: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.body};
    animation:${linePlay} 1s ease infinite;
    animation-play-state: ${props => props.click ? "running" : "paused"};
    height: 1rem;
    width: 2px;
    margin:0px 0.1rem;

    @media screen and (max-width:400px) {
        height: 0.5rem;
        width: 1px;
        margin: 0px 0.1rem;
    }

    @media screen and (max-width:420px) {
        height: 0.5rem;
        width: 1px;    
    }

    @media screen and (max-width:620px) {
        height: 0.5rem;
        width: 1px;    
    }

    
   
`;