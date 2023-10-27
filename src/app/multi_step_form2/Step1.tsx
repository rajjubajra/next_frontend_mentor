'use client'
import { useState, useEffect } from 'react';
import FormHeading from './FormHeading';

interface Step1Props {
  onNext: (data: 
    { name: string; 
      email: string; 
      phone: string }) => void;
      setData: () => void;
}

const Step1: React.FC<Step1Props> = ({ onNext }) => {


  
  
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });


  useEffect(()=> {
    
      onNext(formData);
    
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[formData])
    
  

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
            <span className='text-xs text-red-500 float-right relative top-2'>
            { "3-16 characters, no special characters"}
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
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
        </div>
        <div>
          <span>
            <label className='text-xs'>Email Address</label>
            <span className='text-xs text-red-500 float-right relative top-2'>
              { "Valid email address is required"}
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
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
        </div>
        <div>
          <span>
            <label className='text-xs'>Phone Number</label>
            <span className='text-xs text-red-500 float-right relative top-2'>
              {  "Phone number should be 11 digits"}
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
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                
              />
        </div>
    </div>        
    </div>
    </>
  );
};

export default Step1;