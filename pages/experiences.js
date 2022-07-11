import React from 'react'
import { useState } from 'react'
import ExperienceSection from '../components/ExperienceSection'
import PositionSection from '../components/PositionSection'

const experiences = () => {
  const fraserArray = [
    <PositionSection
      position='Student Activity Council'
      subheading='Secretary'
      description='Description'/>, 
    <PositionSection
      position='Computer Science Club'
      subheading='Vice President'
      description='Description'/>,
    <PositionSection
      position='Investment Club'
      subheading='Co-President'
      description='Description'/>,
    <PositionSection
      position='E-commerce Club'
      subheading='Vice President'
      description='Description'/>,
    <PositionSection
      position='East Asian Student Association'
      subheading='Vice President'
      description='Description'/>,
    <PositionSection
      position='Math Club'
      subheading='Teaching Lead'
      description='Description'/>,
  ]

  const hackathonArray = [
    <PositionSection
      position='Jamhacks'
      subheading='Winner'
      description='Description'/>, 
    <PositionSection
      position='Wafflehacks'
      subheading='Winner'
      description='Description'/>,
    <PositionSection
      position='LLLL'
      subheading='Co-President'
      description='Description'/>,
  ]

  const [showDropdown, setShowDropdown] = useState(false);
  const [showFraser, setShowFraser] = useState('');

  

  return (
    <div>
      <ExperienceSection
      organization='John Fraser Secondary School'
      position='Position'
      logo='panch.webp'
      positionSection={fraserArray}
      showDropdown={showDropdown}
      setShowDropdown={() => setShowDropdown(!showDropdown)}
      section='fraser'
      />
      <ExperienceSection
      organization='Hackathons'
      position='Position'
      subheading='Subheading'
      description='Description'
      logo='panch.webp'
      positionSection={hackathonArray}
      showDropdown={showDropdown}
      setShowDropdown={() => setShowDropdown(!showDropdown)}
      section='hackathon'
      />
      <ExperienceSection
      organization='Volunteering'
      position='Position'
      subheading='Subheading'
      description='Description'
      logo='panch.webp'/>
      <ExperienceSection
      organization='Organization'
      position='Position'
      subheading='Subheading'
      description='Description'
      logo='panch.webp'/>
      <ExperienceSection
      organization='Organization'
      position='Position'
      subheading='Subheading'
      description='Description'
      logo='panch.webp'/>



    </div>
  )
}

export default experiences