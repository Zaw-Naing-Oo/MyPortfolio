import { ThemeProvider } from "styled-components"
import GlobalStyle from "./globalStyle"
import { lightTheme } from "./components/Theme"
import { Routes, Route, useLocation } from "react-router-dom"
import { About, Main, Skill, Work} from './components/index'
import { AnimatePresence } from "framer-motion"
import SoundBar from "./subComponents/SoundBar"
import { useState, useEffect } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner"

function App() {

   const location = useLocation();
   const [loading, setLoading] = useState(true);

   useEffect( () => {
    setTimeout(() => setLoading(false), 3000)
   }, []);

   if (loading) {
    return (
      <div style={{ height: '100vh', width: '100vw', background: '#ade8f4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Puff
        height="100"
        width="100"
        color=' #023e8a'
        ariaLabel='loading'    />
      </div>
    )
   }
    
  
  return <>
          <GlobalStyle />
      
          <ThemeProvider theme={lightTheme}>
      
            <SoundBar />
      
            <AnimatePresence exitBeforeEnter>
              <Routes location={location} key={location.pathname}>
                <Route path="/" index element={ <Main /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/skill" element={ <Skill /> } />
                <Route path="/work" element={ <Work /> } />
              </Routes>  
            </AnimatePresence>  
      
          </ThemeProvider>
        </>
    
}

export default App

