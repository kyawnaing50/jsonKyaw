import React from 'react'
import Title from '../../roundeDesign/home/Title'
import Education from './Education'
import Skills from './Skills'

const Resume = () => {
  return (
      <section id='resume'>
          <Title title="My" subtitle="Resume" />
          <Education />
          <Title title="My" subtitle="Skills" />
          <Skills />
    </section>
  )
}

export default Resume