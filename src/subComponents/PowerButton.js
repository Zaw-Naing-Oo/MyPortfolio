import React from 'react'
import styledComponents from 'styled-components'
import { PowerBtn } from '../components/AllSvg'
import { Link } from 'react-router-dom'

const PowerButton = () => {
  return (
    <Power>
        <Link to="/">
          <PowerBtn fill='currentColor' width={30} height={30} />
        </Link>
    </Power>
  )
}

export default PowerButton


const Power = styledComponents.button`
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #FCF6F4;
    padding: 0.3rem;
    border-radius: 50%;
    border: 1px solid #000;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items:center;
    z-index:3;
    cursor: pointer;
    
    &:hover{
        background-color: #7bdff2;
        box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
    }

    &>*:first-child{
        text-decoration: none;
        color: inherit;
    }

    @media screen and (max-width:400px) {
      width: 2rem;
      height: 2rem;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    @media screen and (max-width:420px) {
      width: 2rem;
      height: 2rem;

      svg {
        width: 20px;
        height: 20px;
      }
      }
    }

    @media screen and (max-width:620px) {
      width: 2rem;
      height: 2rem;

      svg {
        width: 20px;
        height: 20px;
      }
      }
    }
}
`;




