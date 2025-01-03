import React from 'react'
import '../../css/Register.css'

function Register() {
  return (
    <div className='register'>
        <h1>Register For Yoga Teacher Training</h1>
        <h4>Yoga Alliance Certified Yoga TT Course</h4>
        <div className="registerform">
            <form action="">
                <div className="formleft">
                    <label for="fruits">Select Course:</label>
                        <select id="fruits" name="fruits">
                        <option value="apple">Stress Free Session</option>
                        <option value="banana">Stress Free Session</option>
                        <option value="cherry">Stress Free Session</option>
                        <option value="date">Stress Free Session</option>
                    </select>
                    <label for="fruits">Accomodation Type:</label>
                        <select id="fruits" name="fruits">
                        <option value="apple">Stress Free Session</option>
                        <option value="banana">Stress Free Session</option>
                        <option value="cherry">Stress Free Session</option>
                        <option value="date">Stress Free Session</option>
                    </select>
                    <label for="fruits">Gender:</label>
                        <select id="fruits" name="fruits">
                        <option value="apple">Stress Free Session </option>
                        <option value="banana">Stress Free Session</option>
                        <option value="cherry">Stress Free Session</option>
                        <option value="date">Stress Free Session </option>
                    </select>
                    <label for="fruits">Email:</label>
                    <input type="text" placeholder='Email' />
                    <label for="fruits">Country:</label>
                    <input type="text" placeholder='Country'/>
                </div>
                <div className="formright">
                <label for="fruits">Date:</label>
                    <input type="date" placeholder='Date' />
                    <label for="fruits">Name:</label>
                    <input type="text" placeholder='Full Name' />
                    <label for="fruits">Age:</label>
                    <input type="text" placeholder='Age' />
                    <label for="fruits">Contact:</label>
                    <input type="text" placeholder='Whatsapp / Contact Number' />
                    <label for="fruits">Do you have any food allergies, medication, or any other issues related to health ?</label>
                    <input type="text" placeholder='Do yo have any isuue' />
                </div>
                <button>Submit</button>
            </form>
        </div>
        <p><span>Disclaimer: </span>Ours prices may INCREASE from time to time. However, please be assured that we shall commit to the same price at which you have booked and not ask you for the difference. Similarly, our prices may decrease as well. But we shall remain committed to the price at which you have booked.</p>
    </div>
  )
}

export default Register