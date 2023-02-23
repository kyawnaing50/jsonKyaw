import React from 'react'
import Title from '../../roundeDesign/home/Title'
import Aboutme from './Aboutme'
import FunFact from './FunFact'
import MyService from './MyService'

const About = () => {
  return (
      <section id='about' className='w-full'>
        <Title title="about" subtitle="Me" />
        <Aboutme />
        <Title title="My" subtitle="services" />
        <MyService />
        <Title title="My" subtitle="Hobby" />
      <FunFact />
    </section>
  )
}

export default About
