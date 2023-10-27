'use client';
import {useState, useEffect} from 'react';
import FormHeading from "./FormHeading";


export default function Step1({data, setData}) {

  const [message, setMessage] = useState({
    name: "3-16 characters, no special characters",
    email: "Valid email address is required",
    phone: "Phone number should be 11 digits",
  })

  const [validName, setValidName] = useState();
  const [validEmail, setValidEmail] = useState();
  const [validPhone, setValidPhone] = useState();


  

  
  useEffect(()=> {
    /** username validation */
    const userRegex = /^[a-zA-Z0-9]{3,16}$/
    let name = userRegex.test(data.username)
    console.log("VALIDATION: ", name);
    return name ? setValidName(true) : setValidName(false)
  },[data])


  useEffect(()=> {
    /** Email Validation */
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let email = emailRegex.test(data.email)
    email ? setValidEmail(true) : setValidEmail(false)
  },[data])


  useEffect(()=> {
    // /** Phone number validation */
    const numberRegex = /^\d{11}$/;
    let phone = numberRegex.test(data.phone)
    phone ? setValidPhone(true) : setValidPhone(false);
  },[data])
  


  return (
  <>
    {/** Form Heading */}
    <FormHeading title="Personal info" desc="Please provide name, email, and phone number" /> 

    {/** form input fields */}
    <div className="bg-white rounded-lg">
    <div className='grid gap-3'>
        <div>
          <span>
            <label className='text-xs'>Name</label>
            <span className={`text-[0.60rem] text-red-500 float-right relative top-2`}>
            { validName ? "" : message.name}
            </span>
          </span>
          <input 
          required
          className='border w-full px-2 py-3 rounded-lg'
            style={{ 
              fontSize: '0.75rem',  // Equivalent to text-xs in Tailwind CSS
              fontFamily: 'Inter',  // Equivalent to font-light in Tailwind CSS
              // Add other inline styles as needed
            }}
          type="text" 
          name="username" 
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData({...data, username: e.target.value})}
          />
        </div>
        <div>
          <span>
            <label className='text-xs'>Email Address</label>
            <span className='text-[0.60rem] text-red-500 float-right relative top-2'>
            { validEmail ? "" : message.email}
            </span>
            </span>
            <input 
            required
                className='border w-full px-2 py-3 rounded-lg'
                style={{ 
                fontSize: '0.75rem',  // Equivalent to text-xs in Tailwind CSS
                fontFamily: 'Inter',  // Equivalent to font-light in Tailwind CSS
                // Add other inline styles as needed
                }}
            type="text" 
            name="email" 
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({...data, email: e.target.value})}
            />
        </div>
        <div>
          <span>
            <label className='text-xs'>Phone Number</label>
            <span className='text-[0.60rem] text-red-500 float-right relative top-2'>
            { validPhone ? "" : message.phone}
              </span>
            </span>
            <input 
            required
                className='border w-full px-2 py-3 rounded-lg'
                style={{ 
                fontSize: '0.75rem',  // Equivalent to text-xs in Tailwind CSS
                fontFamily: 'Inter',  // Equivalent to font-light in Tailwind CSS
                // Add other inline styles as needed
                }}
            type="tel" 
            name="phone" 
            placeholder="Phone Number"
            value={data.phone}
            onChange={(e) => setData({...data, phone: e.target.value})}
            />
      </div>
    </div>        
    </div>
  </>
  )
}
