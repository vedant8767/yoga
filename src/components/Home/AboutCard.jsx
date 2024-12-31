import React from 'react'
import '../../css/AboutCard.css'

function AboutCard({content}) {
  return (
    <div className='aboutcard'>
        <p>{content}</p>
    </div>
  )
}

export default AboutCard