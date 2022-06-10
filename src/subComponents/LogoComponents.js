import React from 'react'
import styledComponents from 'styled-components'
import {darkTheme} from '../components/Theme'
import { motion } from 'framer-motion'

const LogoComponents = (props) => {
  return (
    <Logo whileHover={{ scale: 1, rotate: 360 }} theme = {props.theme}>ZNO</Logo>
  )
}

export default LogoComponents

const Logo = styledComponents(motion.h1)`
   display: inline-block;
   color: ${props => props.theme === "dark" ? darkTheme.text : darkTheme.body };
   font-family: 'Pacifico', cursive;

   position: fixed;
   left: 2rem;
   top: 2rem;
   z-index: 3;
   cursor: pointer;

   @media screen and (max-width: 400px) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
   }

   @media screen and (max-width: 420px) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
   }

   @media screen and (max-width: 620px) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
   }

`