'use client';
import data from './data.json';
import Comment from './Comment';


function InteractiveComments() {
  console.log("Interactive", data);
  return (
    <div className='w-full flex justify-center'>
        <div className='max-w-[800px] mx-2'>
        {
          data && data.comments.length && data?.comments?.map((item, i)=> {
            return <div key={i}>
                <Comment item={item} />
            </div>
          })
        }
        </div>
    </div>
    
  )
}

export default InteractiveComments
