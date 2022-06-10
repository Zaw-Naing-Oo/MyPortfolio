import React from 'react'
import {  Link } from 'react-router-dom';
import styledComponents from 'styled-components';
import { Github } from '../components/AllSvg';
import { motion } from 'framer-motion';
import { ExternalLink } from 'react-external-link';



// framer motion configuration
const Item = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

 const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box variants={Item}>
        <Title>{ name }</Title>
        <Description>{ description }</Description>
        <Tags>
            {
                tags.map( ( tag, id ) => <Tag key={id}> # {tag}</Tag> )
            }
        </Tags>
        <Footer>
            <Demo href={`${demo}`}>
                Demo
            </Demo>
            <Git href={`${github}` }>
                <Github width={30} height={30} />
            </Git>
        </Footer>
    </Box>
  )
}

export default Card

const Box = styledComponents(motion.li)`
   width: 16rem;
   height: 40vh;
   background-color: #caf0f8;
   color: ${props => props.theme.body};
   padding: 1.5rem 2rem;
   margin-right: 8rem;
   border-radius: 0 50px 0 50px;

   display: flex;
   flex-direction: column;
   justify-content: space-between;
   border: 1px solid ${props => props.theme.body};
   transition: all 0.2s ease;

   &:hover{
       background-color: ${props=> props.theme.body};
       color: ${props=> props.theme.text};
       border: 1px solid ${props=> props.theme.text};
   }

   @media screen and (max-width: 768px) {
    transform: none;
    width: 16rem;
    margin-right: 6rem;
    height: 35vh;
    }

    @media screen and (max-width: 620px) {
        transform: none;
        width: 15rem;
        margin-right: 4rem;
        height: 35vh;
    }

    @media screen and (max-width: 420px) {
        transform: none;
        width: 15rem !important;
        margin-right: 4rem !important;
        height: 35vh !important;
        padding: 1.5rem !important;
    }

    
    @media screen and (max-width: 400px) {
        transform: none;
        width: 12rem !important;
        margin-right: 4rem !important;
        height: 35vh !important;
        padding: 1.5rem !important;
    }
`;

const Title = styledComponents.h2`
   font-size: calc(1rem + 0.5vw );
`;

const Description = styledComponents.h4`
   font-size: calc(0.8rem + 0.3vw);
   font-family: 'Karla', sans-serif;
   font-weight: 500;

   @media screen and (max-width: 400px) {
     font-size: calc(0.7em + 0.3vw);
   }


`;

const Tags = styledComponents.div`
   border-top: 2px solid ${props => props.theme.body};
   padding-top: 0.7rem;
   display: flex;
   flex-wrap: wrap;
   font-size: calc(0.8em + 0.3vw);
   ${Box}:hover & {
       border-top: 2px solid ${props => props.theme.text};
   }
`;

const Tag = styledComponents.span`
   margin-right: 1rem;


    @media screen and (max-width: 820px) {
        margin-right: 1rem;
    }

    @media screen and (max-width: 620px) {
        margin-right: 1rem;
    }

    @media screen and (max-width: 420px) {
        margin-right: 1rem !important;
    }

    @media screen and (max-width: 400px) {
        font-size: calc(0.8em);
    }

   

   

   
`;

const Footer = styledComponents.footer`
   display: flex;
   justify-content: space-between;
`;

const Demo = styledComponents(ExternalLink)`
   background-color: ${props => props.theme.body};
   color: ${props => props.theme.text};
   text-decoration: none;
   padding: 0.5rem calc(2rem + 2vw);
   border-radius: 0 0 0 50px;
   font-size: calc(1rem + 0.5vw);

   ${Box}:hover & {
       background-color: ${props => props.theme.text};
       color: ${props => props.theme.body};
    }
`;

const Git = styledComponents(ExternalLink)`
    color: inherit;
    text-decoration: none;
    ${Box}:hover & {
        & > * {
            fill: ${props => props.theme.text};
        }
    }
`;