import React, { useCallback, useState } from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Section from './AboutMe/Section'
import Skills from './Skills/Skills'
import MyProjects from './MyProjects/MyProjects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import AboutMe from './AboutMe/AboutMe'
import CustomCursor from './components/ui/CustomCursor'

function App() {
  const [panel, setPanel] = useState(null);

  const openAbout = useCallback(() => setPanel('about'), []);
  const closePanel = useCallback(() => setPanel(null), []);

  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Section onAboutMe={openAbout} />
      <AboutMe isOpen={panel === 'about'} onClose={closePanel} />
      <Skills /><MyProjects /><Contact /><Footer /></div>
  )
}

export default App