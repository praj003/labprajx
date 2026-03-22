import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Navbar.tsx'
import Hero from './Hero.tsx'
import Projects from './Projects.tsx'
import Background from './Background.tsx'
import AboutMe from './Aboutme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Background />
    <Navbar />
    <Hero />
    <AboutMe />
    <Projects />
  </StrictMode>,
)
