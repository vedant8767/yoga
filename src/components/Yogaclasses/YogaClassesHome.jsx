import React from 'react'
import '../../css/YogaClassesHome.css'
import star from '../../assets/ic_round-star.png'
import star1 from '../../assets/ic_round-star1.png'


function YogaClassesHome() {
  return (
    <div className='yogaclasses'>
        <div className="headeryoga">
            <h1>Ashtanga Vinyasa Yoga Classes</h1>
            <div className="line"></div>
        </div>

        <div className="yogaclasseshome">
            <div className="yogaclassesleft">
                <h3>HIGHLIGHTS:- </h3>
                <p>
                    8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher 
                    Training Course that is perfect for beginners and experienced yogis alike.
                    The course is designed to provide students with a deep understanding of 
                    yoga and prepare them to become competent and confident yoga teachers.For beginners 
                    and experienced yogis alike. The course is designed to provide students with a deep
                    understanding of yoga and prepare them to become competent and confident yoga teachers.
                </p>
                <h3>ELIGIBILITY:- </h3>
                <p>
                    The course is taught by a team of experienced and certified yoga teachers who are
                    passionate about sharing their knowledge of yoga with students. They cover various
                    styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students
                    with a well-rounded education in yoga.They cover various styles of yoga, including 
                    Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education 
                    in yoga.
                </p>
                <div className="ratings">
                    <p>Ratings:</p>
                    <div className="stars">
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star1} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="yogaclassesright">
                <h3>Enroll in the Program</h3>
                <form action="">
                    <input type="text" placeholder='Enter your name' />
                    <input type="text" placeholder='Enter phone number' />
                    <input type="text" placeholder='Select Branch' />
                    <input type='date' placeholder='Set your schedule' />
                    <input type="text" placeholder='Leave us a message' />
                    <button>BOOK NOW</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default YogaClassesHome