import React from 'react'
import '../../css/Cirriculum.css'

function Curriculum() {
  return (
    <div className='curriculum'>
        <div className="curriculumhead">
            <h1>Curriculum</h1>
            <div className="linecurriculum"></div>
        </div>
        <div className='crfirstdiv' data-aos="fade-up">
                <div className='firstdivleft'>
                    <p>In-depth practice of asana, pranayama and kriya</p>
                </div>
                <div className='firstdivright'>
                    <p>Mastery over asana, pranayama and kriyas transforms and resets your body to its highest efficiency, making it strong and flexible. Your blocked energies will begin to flow again, giving you vitality. Kriyas help release that which harms our prana.</p>
                </div>
        </div>
        <div className='crseconddiv' data-aos="fade-up">
                <div className='seconddivleft'>
                    <p>Anatomy and Physiology</p>
                </div>
                <div className='seconddivright'>
                    <p>Gaining in-depth knowledge of your body systems – muscular, endocrine, respiratory etc. will empower you to manage modern-day diseases with yoga.Ullamco aute reprehenderit laboris dolore labore.</p>
                </div>
        </div>
        <div className='crfirstdiv' data-aos="fade-up">
                <div className='firstdivleft'>
                    <p>Attitude Training</p>
                </div>
                <div className='firstdivright'>
                    <p>Develop your personality through the right yogic attitude.</p>
                </div>
        </div>
        <div className='crseconddiv' data-aos="fade-up">
                <div className='seconddivleft'>
                    <p>Yogic Diet</p>
                </div>
                <div className='seconddivright'>
                    <p>Learn all about the nuances of yogi ahar, and understand the food categories – Sattvik, Rajasik, and Tamasik. </p>
                </div>
        </div>
    </div>
  )
}

export default Curriculum