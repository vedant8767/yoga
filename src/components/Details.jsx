import React, { useState } from "react";
import '../css/Details.css';

const Details = () => {
  const [activeSection, setActiveSection] = useState("Program details");

  const sections = {
    "Program details": (
      <div className="detailsection">
        <div className="detailsectionleft">
            <h2>Program Details</h2>
            <p>
            8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect
            for beginners and experienced yogis alike. The course is designed to provide students with
            a deep understanding of yoga and prepare them to become competent and confident yoga teachers.
            For beginners and experienced yogis alike. The course is designed to provide students with a 
            deep understanding of yoga and prepare them to become competent and confident yoga teachers.
            </p>
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
    ),
    Eligibility: (
      <div className="detailsection">
        <div  className="detailsectionleft">
            <h2>Eligibility</h2>
            <p>
            The course is taught by a team of experienced and certified yoga teachers 
            who are passionate about sharing their knowledge of yoga with students. They cover 
            various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students
            with a well-rounded education in yoga.They cover various styles of yoga, including Hatha, 
            Ashtanga, Vinyasa, and Iyengar, providing students with
            a well-rounded education in yoga.
            </p>
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
    ),
    Curriculum: (
      <div  className="detailsection">
        <div className="detailsectionleft">
            <h2>Curriculum</h2>
            <p>
            8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect
            for beginners and experienced yogis alike. The course is designed to provide students with
            a deep understanding of yoga and prepare them to become competent and confident yoga teachers.
            For beginners and experienced yogis alike. The course is designed to provide students with a 
            deep understanding of yoga and prepare them to become competent and confident yoga teachers.
            </p>
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
    ),
    Instructor: (
      <div className="detailsection">
        <div  className="detailsectionleft">
            <h2>Instructor</h2>
            <p>The course is taught by a team of experienced and certified yoga teachers 
            who are passionate about sharing their knowledge of yoga with students. They cover 
            various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students
            with a well-rounded education in yoga.They cover various styles of yoga, including Hatha, 
            Ashtanga, Vinyasa, and Iyengar, providing students with
            a well-rounded education in yoga.</p>
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
    ),
    "Related Course": (
      <div className="detailsection">
        <div  className="detailsectionleft">
            <h2>Related Course</h2>
            <p> 8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect
            for beginners and experienced yogis alike. The course is designed to provide students with
            a deep understanding of yoga and prepare them to become competent and confident yoga teachers.
            For beginners and experienced yogis alike. The course is designed to provide students with a 
            deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
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
    ),
    FAQ: (
      <div  className="detailsection">
        <div  className="detailsectionleft">
            <h2>FAQ</h2>
            <p>The course is taught by a team of experienced and certified yoga teachers 
            who are passionate about sharing their knowledge of yoga with students. They cover 
            various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students
            with a well-rounded education in yoga.They cover various styles of yoga, including Hatha, 
            Ashtanga, Vinyasa, and Iyengar, providing students with
            a well-rounded education in yoga.</p>
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
    ),
  };

  return (
    <div className="container">
      <nav className="detailnav">
        {Object.keys(sections).map((section) => (
          <button
            key={section}
            className={`nav-item ${
              activeSection === section ? "active" : ""
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </nav>
      <div className="detailcontent">{sections[activeSection]}</div>
    </div>
  );
};

export default Details;
