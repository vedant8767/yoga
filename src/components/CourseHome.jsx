import React from 'react'
import '../css/CourseHome.css'

function CourseHome() {
  return (
    <div className='coursehome'>
        <div className="coursehomeleft" data-aos="zoom-in">
            <h1>100 Hours Yoga Teacher Training</h1>
            <p>- Monday to Saturday: 6:30 am to 8:00 pm Holiday on all Sundays</p>
            <p>- Achieve balance and fulfilment in life through yogic tools and techniques.</p>
            <div className="coursesbt">
                <button id='cbt1'>Enroll Now</button>
                <button id='cbt2'>View Similar Programs</button>
            </div>
        </div>
        <div className="coursehoemright" data-aos="zoom-in">
            <img src="https://s3-alpha-sig.figma.com/img/7f35/bad6/2a1c5403801fc1e23d7b0017313d583a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LE2tUS9IInWx6MLFbu7KDM41BHJ4DHxO~SjrK7FoWFQpY5Qj2SUYwVIDsZfT7D2bayLhyinCsww1vP9J2gI~V2GGuv6kLPo3fMzLruBX7sQ6yI4QPPeGnsHOi1yTSgMoTz7kzkJvit8Jp50ZJzItepLwtTCYS36bBgbXoIXISOx0vQ5gjp1earPzky8JdVRrM~z~-JIttS~F6W8PwmaQ5~DH4waiZVrxhTW08g3JPm1sdYmL-EPQkYuBw3NYWJjH-gI1EaGz45H3hjoQtSSarpiDuuNhcylOWE~221gM28v-StBLQOSlfn5GDSH2Y0WqQnTs42tcws9G6Bw-QLRexw__" alt="" srcset="" />
        </div>
    </div>
  )
}

export default CourseHome