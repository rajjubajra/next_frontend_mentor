import React, { ChangeEventHandler, ReactNode  } from 'react';


interface InputFieldProps {
  label: string;
  name: string;
  message: string;
  placeholder: string;
  id: number;
  
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const InputField: React.FC<InputFieldProps> = (props) => {

  const {label, message, onChange, id, ...inputProps} = props;

  return (

      <input
        className='border w-full p-2 rounded-lg'
        {...inputProps} onChange={onChange} 
        style={{ 
          fontSize: '0.75rem',  // Equivalent to text-xs in Tailwind CSS
          fontFamily: 'Inter',  // Equivalent to font-light in Tailwind CSS
          // Add other inline styles as needed
        }}
      />
  );
}

export default InputField;
