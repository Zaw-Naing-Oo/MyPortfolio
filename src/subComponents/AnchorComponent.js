import React from 'react'
import { useEffect, useRef } from 'react';
import styledComponents from 'styled-components'
import { Anchor, Link } from '../components/AllSvg';

const AnchorComponent = (props) => {

  const ref  = useRef(null);
  const hiddenRef  = useRef(null);
 
  useEffect( () => {
   
    const handleScroll = () => {
      const bodyHeight = document.body.offsetHeight;
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
    
      let diff = Math.max( bodyHeight - (scrollPosition + windowSize ));
    
      let diffP = ( diff * 100 ) / (bodyHeight - windowSize);
      // console.log(diffP)
  
      ref.current.style.transform = `translateY(${-diffP}%)`;

      if( window.pageYOffset > 5)  {
        hiddenRef.current.style.display = 'none';
      } else {
        hiddenRef.current.style.display = 'block';

      }
    }

    window.addEventListener('scroll', handleScroll);
    
    return () =>  window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <Contaienr>
      <PreDisplay ref={hiddenRef} className = "hidden  ">
        <Anchor width={70} height={70} fill="currentColor" />
      </PreDisplay>
        <Slider ref={ref}>
          {
            [...Array(props.numbers)].map((x,id) => {
              return <Link key={id} width={25} height={25} fill="currentColor" className  ="chain" />
            })
          }
        <Anchor width={70} height={70} fill="currentColor" />
        </Slider>
    </Contaienr>
  )
}

export default AnchorComponent

const Contaienr = styledComponents.div`
   position: relative;
`;

const Slider = styledComponents.div`
   position: fixed;
   top: 0;
   right: 2rem;

   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   transform: translateY(-100%);

   .chain {
    transform: rotate(135deg);
   }
`;

const PreDisplay = styledComponents.div`
  position: absolute;
  top: 0;
  right: 2rem;
`;

