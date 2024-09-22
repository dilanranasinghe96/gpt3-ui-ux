import React from 'react'
import './App.css'



import { Brand, CTA, NavBar } from './components'
import {Blog, Features, Footer, Header, Posstibility,WhatGPT3 } from './containers'
const App = () => {
  return (
    <div className="App">
      <div className='gradiant__bg'>
        <NavBar/>
        <Header/>
        <div>
          <Brand/>
          <WhatGPT3/>
          <Features/>
          <Posstibility/>
          <CTA/>
          <Blog/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App