import React from 'react'
import { useMatch } from 'react-router-dom'

const About = () => {
  const match = useMatch("/about");
  return (
    <div>
      About
      
    </div>
  )
}

export default About