import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page3fs from './components/Page3fs'
import Page4 from './components/Page4'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import Page5 from './components/Page5'
import Page6 from './components/Page6'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
    <Nav/>
    <Hero/>
    <Page2/>
    <Page3/>
    <Page3fs/>
    <Page4/>
    <Page5/>
    <Page6/>
    <Footer1/>
    <Footer2/>
    
    
    </>
  )
}

export default App
