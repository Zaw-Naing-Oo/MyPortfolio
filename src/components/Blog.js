import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PowerButton  from '../subComponents/PowerButton'
import {Blogs} from '../data/BlogData';
import BlogComponents from './BlogComponents';
import AnchorComponent from '../subComponents/AnchorComponent'
import LogoComponents from '../subComponents/LogoComponents';
import SocialIcon from '../subComponents/SocialIcon';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import BigTitle from '../subComponents/BigTitle';


const Blog = () => {

  const [numbers, setNumbers] = useState(0);

  useEffect( () => {
    let number = (window.innerHeight - 70 ) / 30;
    setNumbers(parseInt(number));
  }, [])

  return (
      <MainContainer style={{ overflow: 'scroll' }}
      >
        <Container>
            <LogoComponents />
            <PowerButton />
            <SocialIcon />
            <AnchorComponent numbers={numbers} />
            <Center>
                <Grid>

                  {
                      Blogs.map(blog => {
                          return <BlogComponents key={blog.id} blog={blog} />
                      })
                  }
                  </Grid>
            </Center>
            <BigTitle text="Blog" top="10%" right="40%" />
        </Container>
      </MainContainer>
     )
}

export default Blog



const MainContainer = styled.div`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
width: 100%;
height:auto;
position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`