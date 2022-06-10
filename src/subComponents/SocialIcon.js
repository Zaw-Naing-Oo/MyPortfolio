import React from 'react'
import styledComponents from 'styled-components'
import { Facebook, Github, Twitter, LinkedIn } from '../components/AllSvg'
import { darkTheme } from '../components/Theme'
import { motion } from 'framer-motion'
import { ExternalLink } from 'react-external-link'



const SocialIcon = (props) => {
  // console.log(props);

  return (
    <Icons>

        <motion.div initial={{ initial: "scale(0)" }} animate={{ scale:[0,1,1.5,1] }} transition={{ type: 'spring',duration: 1, delay: 1.2 }}>
            <ExternalLink href='https://github.com/Zaw-Naing-Oo' style={{ color: 'inherit' }} >
              <Github width={25} height={25} fill= { props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </ExternalLink>
        </motion.div>

        <motion.div initial={{ initial: "scale(0)" }} animate={{ scale:[0,1,1.5,1] }} transition={{ type: 'spring',duration: 1, delay: 1.4 }}>
            <ExternalLink href='https://www.linkedin.com/in/zaw-naing-oo-660150206/' style={{ color: 'inherit' }} >
                <LinkedIn width={25} height={25} fill= { props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </ExternalLink>
        </motion.div>

        <motion.div initial={{ initial: "scale(0)" }} animate={{ scale:[0,1,1.5,1] }} transition={{ type: 'spring',duration: 1, delay: 1.6 }}>
            <ExternalLink href='https://twitter.com/ZawNaingOo77' style={{ color: 'inherit' }} >
              <Twitter width={25} height={25} fill= { props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </ExternalLink>
        </motion.div>

        <motion.div initial={{ initial: "scale(0)" }} animate={{ scale:[0,1,1.5,1] }} transition={{ type: 'spring',duration: 1, delay: 1.8 }}>
            <ExternalLink href='https://www.facebook.com/profile.php?id=100011619218177' style={{ color: 'inherit' }} >
              <Facebook width={25} height={25} fill= { props.theme === "dark" ? darkTheme.text : darkTheme.body} />
            </ExternalLink>
        </motion.div>

       

        <Line theme={props.theme} initial={{ height: 0 }} animate={{ height: '8em' }} transition={{ type: 'spring', duratin: 1, delay: 0.8 }} />
    </Icons>
  )
}

export default SocialIcon


const Icons = styledComponents.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position : fixed;
    bottom: 0;
    left: 2rem;
    z-index: 3;

    & > :not(:last-child) {
        margin: 0.5rem 0px;
    };

    @media screen and (max-width:400px) {
      left: 1rem;

      svg {
        width: 20px;
        height: 20px;
      }
     }

     @media screen and (max-width:420px) {
      left: 1rem;

      svg {
        width: 20px;
        height: 20px;
      }
     }

     @media screen and (max-width:620px) {
      left: 1rem;

      svg {
        width: 20px;
        height: 20px;
      }
     }
`

const Line = styledComponents(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.theme === "dark" ? darkTheme.text : darkTheme.body };

  @media screen and (max-width:400px) {
      height: 5rem !important;
   }

   @media screen and (max-width:420px) {
    height: 5rem !important;
  }

  @media screen and (max-width:620px) {
    height: 8rem;
  }
`