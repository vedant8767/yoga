import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "../../css/ClassesinDetail.css";
import CarouselComponent from "../CarouselComponent";
import image1 from "../../assets/th1.jpg";
import image2 from "../../assets/th2.jpg";
import image3 from "../../assets/img2.jpg";
import image4 from "../../assets/th3.jpg";
const images = [image1, image2, image3, image4]

const ClassesinDetail = () => {
  const [activeSection, setActiveSection] = useState("Program details");

  const sections = {
        "Program details": (
          <div className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
          </div>
        ),
        Eligibility: (
          <div className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
          </div>
        ),
        Curriculum: (
          <div  className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
          </div>
        ),
        Instructor: (
          <div className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
          </div>
        ),
        "Related Course": (
          <div className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
          </div>
        ),
        FAQ: (
          <div  className="detailsection">
            <div className="tvleft">
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
                <CarouselComponent images={images}/>
                {/* <img src='https://s3-alpha-sig.figma.com/img/795e/15be/c3f12904c6eaf323ac36854ecbfc2be3?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kOjRzmVVPpj1rtlmaAF0MPpDCipndfNiKsw1Ttmdp-hpWpcTiOlJTfI0ZlgJ6P7rT4oBmak66HYyBbRaxDgw2eEJTrcfrnCwGTD5AfsJdhrUUKAuBAI5cYagO8mcQjEapGgSNFZDjUZTD9eWVBFJE4glN5jRZ1hrzlYZkt7~cYT-KaTbdWJkSoB9Vtht1QwZl~n99kNJjZlFUVQ6PHZguiHJro81pzt1N5IxmbZvL7olDsFbuBIng8GSZu0hOv2tA82wsvxu~2vnl5SXy1lkjW981HgNOzEmGeeNgvLj-wH-KIMsRvgUVpaDOscVyMSxSKDob0Mmoy9OClKenQ9m4w__' alt="" /> */}
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
      <SwitchTransition>
        <CSSTransition
          key={activeSection}
          timeout={300}
          classNames="fade1"
          unmountOnExit
        >
          <div className="detailcontent">{sections[activeSection]}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default ClassesinDetail;
