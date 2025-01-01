import React from 'react'
import '../../css/TherapyHome.css'
import star from '../../assets/ic_round-star.png'
import star1 from '../../assets/ic_round-star1.png'
import tc from '../../assets/classes.png'
import CarouselComponent from '../CarouselComponent'

function TherapyHome() {
  return (
    <div className='therapy'>
        <div className="therapyheader">
            <h1>Yoga Therapy for Diabetes Reversal</h1>
            <div className="therapyline"></div>
        </div>
        <div className="therapycontent">
            <div className="tvleft" data-aos="fade-up">
                <table>
                    <tr>
                        <th>TITLE</th>
                        <th>ACTIVITIES</th>
                    </tr>
                    <tr>
                        <td>Duration</td>
                        <td>11 Days</td>
                    </tr>
                    <tr>
                        <td>Level</td>
                        <td>Beginner to intermediate</td>
                    </tr><tr>
                        <td>Date</td>
                        <td>3rd-13th of every month</td>
                    </tr><tr>
                        <td>Certification</td>
                        <td>Yoga Alliance USA</td>
                    </tr><tr>
                        <td>Style</td>
                        <td>Multi Style Yoga</td>
                    </tr><tr>
                        <td>Price</td>
                        <td>INR 10,000/-</td>
                    </tr>
                </table>
            </div>
            {/* <div className="tcright"> */}
                <CarouselComponent/>
            {/* </div> */}
            {/* <div className="tcright" data-aos="fade-up">
                <img src='https://s3-alpha-sig.figma.com/img/7806/2fd8/b23b7669b7407771f63a307c71a2b923?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iwwws5q2hIKFm2z93x7ifAQCL34fChuZU8zVRapu~wAJjI9a-F687H5zYd-NLP037jr3RQjQkV8Nrnp3V-TybBP2af2SBpEpbPg8UmZ6TfZIE33HqfHx4Mdgk5XL5As5sKG5FIpe6FzGRKO9GknX0bHDLrZBzxw2pA8zfHORjKDYPt7d~7YCv2cbXg6e4PoslzlWkUF6AnfjVT6~MQMMHd9cBoDcaojyshAtBanOLoI4dZxc-L0GXyZ4rgQf3rhKu3rJVQfAsVJt90dHX3UAF8A6DdYnSJpAs3puhQgXD2dRKEsVyYRN8iWm6XvyU6YDKyoSfAKMmH2iUZ0ApOOQUw__' alt="" srcset="" />
                <div className="tcratings">
                    <p>Ratings:</p>
                    <div className="tcstars">
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star} alt="" srcset="" />
                        <img src={star1} alt="" srcset="" />
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default TherapyHome