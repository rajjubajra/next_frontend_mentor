import FormHeading from './FormHeading';

type UserData = {
  username: string,
  email: string,
  phone: number,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void,
}

export function Step1({
  username,
  email,
  phone,
  updateFields,
}: UserFormProps) {

  
  // const [validUsername, setValidUsername] = useState(true);
  // const [validEmail, setValidEmail] = useState(true);
  // const [validPhone, setValidPhone] = useState(true);




  return (
    <>
    <FormHeading title="Personal info" desc="Please provide name, email, and phone number" />  
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
            name="username"
            value={username}
            onChange={e => updateFields({ username: e.target.value })}
            placeholder="e.g. Stephen King" />
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
            type="rext" 
            name="email"
            value={email}
            onChange={e => updateFields({email: e.target.value})}
            placeholder="e.g. stephenking@lorem.com" />
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
            type="text" 
            name="phone"
            value={phone}
            onChange={e => updateFields({phone: e.target.value})}
            placeholder="e.g. 1234 567 890" />
          </div>
        </div>        
      </div>
  </>
  )
}
