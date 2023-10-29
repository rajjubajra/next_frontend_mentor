'use client';
import {useState} from 'react';
import Image from 'next/image';
import data from './data.json';
import {addReplies} from './addReplies';


function ReplyForm({item}) {


  const [formdata, setFormdata] = useState({
    reply_id: '',
    reply_userid: '',
    reply_comment: '',
  })

  console.log(formdata);

  const handlFormdata = (value) => {
    console.log(value);
    setFormdata({
      "reply_id": 5,
      "reply_userid": "newuser1",
      "reply_comment": value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex my-10 p-5 border rounded-lg bg-slate-100 shadow-sm'>
        <div>
          <Image 
          className='w-12 h-12'
          src={"/assets" + data?.currentUser?.image?.png} width={50} height={50} alt='user' /> 
        </div>
        <div className='md:flex w-full'>
          <textarea 
          className='w-full h-20 rounded-lg md:mx-5 mx-2 p-2'
          name="reply"
          onChange={(e) => handlFormdata(e.target.value)}></textarea>
          <button 
          className='px-4 md:mt-0 mt-2 md:float-none float-right rounded-lg bg-blue-600 text-slate-200 border h-10'
          type="submit">Reply</button>
        </div>
      </div>
    </form>
  )
}

export default ReplyForm
