import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import AboutMe from './AboutMe/AboutMe'
import Skills from './Skills/Skills'
import MyProjects from './MyProjects/MyProjects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div><Navbar /><Hero /><AboutMe /><Skills /><MyProjects /><Contact /><Footer /></div>
  )
}

export default App