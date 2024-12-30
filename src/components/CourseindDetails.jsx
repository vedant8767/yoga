import React, { useState } from "react";
import '../css/CourseindDetails.css';
import { CSSTransition, SwitchTransition } from "react-transition-group";

const CourseindDetails = () => {
  const [activeSection, setActiveSection] = useState("Program details");

  const sections = {
    "Program details": (
     <div className="crinddetails">
        <div className="crindheader">
            <h1>Program Details</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
    Eligibility: (
        <div className="crinddetails">
        <div className="crindheader">
            <h1>Eligibility</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
    Curriculum: (
        <div className="crinddetails">
        <div className="crindheader">
            <h1>Curriculum</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
    Instructor: (
        <div className="crinddetails">
        <div className="crindheader">
            <h1>Instructor</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
    "Related Course": (
        <div className="crinddetails">
        <div className="crindheader">
            <h1>Related Course</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
    FAQ: (
        <div className="crinddetails">
        <div className="crindheader">
            <h1>FAQ</h1>
            <div className="ceindline"></div>
        </div>
        <div className="crindcontent">
            <div className="crindcontentleft">
                <p>8 Limbs Yoga studio offers a comprehensive 100 Hours Multi Style Yoga Teacher Training Course that is perfect for beginners and experienced yogis alike. The course is designed to provide students with a deep understanding of yoga and prepare them to become competent and confident yoga teachers.</p>
                <p>The course is taught by a team of experienced and certified yoga teachers who are passionate about sharing their knowledge of yoga with students. They cover various styles of yoga, including Hatha, Ashtanga, Vinyasa, and Iyengar, providing students with a well-rounded education in yoga.</p>
                <p>The course curriculum includes asana practice, pranayama, meditation, yoga philosophy, anatomy, and teaching methodology. The classes are kept small to ensure that students receive personalized attention and guidance from the teachers.</p>
            </div>
            <div className="crindcontentright">
                <div className="rimg">
                    <img src="https://s3-alpha-sig.figma.com/img/461b/9642/dd5978042b517d576c03aa2eaa92efcd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ewisIbfV9e94wLf0zBRkdwxirHLyQKOPeeEA3N1i~QahelkEYa2uGRKbSfNUY0JWF3TiInHFBRxXGXtpjmDWVHZFnow72dan5BmF3LS5aHAQi8s18BQX7GOWptJM14Mu~H~AHHkxQjqtB8FCO7ThyBncrXpEJlk9Vf~G0YDFa3eL1hl7iC7xB-~6mV3YrJHI-Aj72WlVFlR06x0erkoHKlqMz7E~7g0V34-5xuf4464B~zFYGU0sg5-8x-ej6yr6SVuu8Zauc2J9hV7Qin78GwI151WMcz4~z7J3Ms8AikCpAghqEfQXy6Wh-sb~6AOQuXUb8mUO42Uh2IeJLaGAVQ__" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/0c43/062b/9e1637f95ae7a6e126297d9730aca3f9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NG~fJYPbli2yHrnT~8oBSFLQ88mBhxZ6LxaZj~O7AJ5ty90txFbhc7BzK5MCr9rcgbVnLHClYKI9VIh9g9IcadZZR-dPMpKZGihjVSTt~DcRQ6-B4OMyKguYmxEfU50C7C8-G3zX87ff3B2z9jJ1pOFpQea5Xe8U9ht1JLTc7zKTo5tNfJK4Ilcc1EfhVzhIjWrx1j7fMBnNAT9ca-INMs4U75weS2iz-g~ArmQSO-XEs77eM1ax-9az5jkw3oDXtHrHDXl323oMfBe4Z8owK1Q5gmETCKUyG2TFkbsPjKlgLufnmMnLNng99hEVuEHQqD1qjXLs0aewcCGKnu16VA__" alt="" />
                </div>
                <div className="rleft">
                    <img src="https://s3-alpha-sig.figma.com/img/d8fe/a8d0/c89acac9cf757739edb3baad69f5269a?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agLivp0TkLSEQjY~AwtrlU~ECzwhvYA~LB62fDmqA01Mq4gYJnM~QkWN3nGVGqGMnAoSMWydo7YeS0gBBD43qJrkPG6sxh8WS7SqQJvyFXd4GWPRmetS7L0iogOAvfpyZ0dQ9TXKwqYZODl6MISJcvQ-urhhPqWBnYPtnpE4BOWC0FgUZp97ZOekBOuy8ClB2~hvOFMwoNvJdXyiwhFdc07vURJ4HiDqvQZ1Hbu0iAcjwmaTsCvYYxSq~VqazlN~kiB6Jp-iEsYtQsW8xizJ78CblOhDZRLMSwSOxyEon4b--IUkvgMRJfFl1a09-1V~hzJtdMrRhsdW4XoluYv81g__" alt="" srcset="" />
                </div>
            </div>
        </div>
     </div>
    ),
  };

  return (
    <div className="container1">
      <nav className="detailnav1">
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
          classNames="fade"
          unmountOnExit
        >
      <div className="detailcontent">{sections[activeSection]}</div>
      </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

export default CourseindDetails;
