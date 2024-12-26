import React from 'react'
import AboutCard from './AboutCard'
import img1 from '../assets/studio.png'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import classes from '../assets/classes.png'
import '../css/About.css'

function About() {
    const content =["Immerse yourself in the wisdom of our world-class instructors.","Immerse yourself in the wisdom of our world-class instructors.","Immerse yourself in the wisdom of our world-class instructors."]
  return (
    <div className='about'>
        <div className="section1">
            <div className="section1img">
            <img src={img1} alt="" srcset="" />
            </div>
            <div className='section1_content'>
            <h1>WHY 8 LIMBS YOGA STUDIO?</h1>
            <p>We believe that yoga goes beyond physical practice to incorporate self-discovery and change. 
                This foundation will help shape the diverse yoga experiences to be experienced by our beginners 
                to our advanced students. That is why we offer various yoga experiences to all of our students, 
                from beginner to advanced practitioner. 
                This is the reason we offer different yoga experiences that cater to all our students.</p>
            </div>
        </div>
        <div className="section2">
            <div className="section2content">
                <h2>MISSION AND VISSION</h2>
                <p>At 8 Limbs Yoga, we believe that yoga is more than just a physical practice.
                    It's a journey of self-discovery and transformation. 
                    That's why we offer a variety of yoga experiences to meet
                    the needs of all students, from beginners to advanced practitioners. 
                    That's why we offer a variety of yoga experiences to meet the needs of all students,
                    from beginners to advanced practitioners. That's why we offer a variety of
                        yoga experiences to meet the needs 
                    of all students, from beginners to advanced practitioners. </p>
            </div>
            <div className="section2_img">
                <div className="imgsection1">
                    <img src={img2} alt="" />
                </div>
                <div className="imgsection2">
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                </div>
                <div className="imgsection3">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
        <div className="section1">
            <div className="section1img">
            <img src={classes} alt="" srcset="" />
            </div>
            <div className='section1_content'>
            <h2>WHY CHOOSE US?</h2>
            <p>At 8 Limbs Yoga, we believe that yoga is more than just a physical practice. 
                It's a journey of self-discovery and transformation. That's why we offer a
                 variety of yoga experiences to meet the needs of all students, from beginners
                  to advanced practitioners. That's why we offer a variety of yoga experiences 
                  to meet the needs of all students, from beginners to advanced practitioners. 
                  That's why we offer a variety of yoga experiences to meet
                 the needs of all students, from beginners to advanced practitioners. </p>
            </div>
        </div>
        
        <div className="section4">
            <h2>DISCOVER HARMONY AND WELLNESS AT</h2>
            <h3>8 LIMBS YOGA STUDIO</h3>
            <p>At 8 Limbs Yoga, we believe that yoga is more than just a physical practice. 
                It's a journey of self-discovery and transformation. That's why we offer a 
                variety of yoga experiences to meet the needs of all students, from beginners to
                 advanced practitioners. That's why we offer a variety of yoga experiences to meet
                  the needs of all students, from beginners to advanced practitioners. 
                  That's why we offer a variety of yoga experiences to meet the needs of all students, 
                  from beginners to advanced practitioners. 
            </p>
        </div>
        <div className="section5">
            <div className="section5part1">
            {content.map((item)=>(
                <AboutCard content={item}/>
            ))}
            </div>
            <div className="section5part2">
            <img src={img2} alt="" />
            </div>
            <div className="section5part1">
            {content.map((item)=>(
                <AboutCard content={item}/>
            ))}
            </div>
        </div>
    </div>
  )
}

export default About