'use client';
import {useState} from 'react';
import Image from 'next/image';
import ReplyButton from './ReplyButton';
import ScoreLabel from './ScoreLabel';
import ReplyForm from './ReplyForm';
import Replies  from './CommentReply';


function CommentReply({item}) {

  console.log("Reply", item.score);

  const [commentId, setCommentId] = useState();
  const [reply, setReply] = useState(false);
  console.log(commentId, reply);

  const openReply = (id) => {
    setCommentId(id);
    setReply(true)
  }

  return (
    <>
    <div className='flex md:flex-row flex-col mb-10 border rounded-lg p-5 bg-slate-100 shadow-sm'>
            {/** SCORE LABEL */}
                <div className='md:block hidden'>
                  <ScoreLabel score={item?.score} />
                </div>   

            {/** COMMENT BLOCK */} 
                <div>
                  <div className='flex my-2 justify-between'>
                    {/** COMMENT HEADER LEFT */}
                    <div className='flex'>
                    <Image 
                    className='w-12 h-12 mr-5'
                    src={"/assets"+item?.user?.image.png} alt="user" width={50} height={50} />
                    <h3 className='mt-2 font-bold'>{item?.user?.username}</h3>
                    <div className='mt-3.5 ml-5 text-xs'>{item?.createdAt}</div>
                    </div>
                    {/** COMMENT HEADER RIGHT - REPLY BUTTON */}
                    <div onClick={() => openReply(item.id)}
                    className={`${commentId === item?.id && reply ? "hidden" : "block"} mb-2 md:block hidden`}>
                      <ReplyButton />
                    </div>
                  </div>

                  {/** COMMENT SECTION */}
                  <div className='py-4' dangerouslySetInnerHTML={{__html: item?.content}} />
                </div>

                {/** Score label and reply button for mobile device */}
                <div className='md:hidden flex justify-between'>
                    <div>
                      <ScoreLabel score={item?.score} />
                    </div>
                    <div 
                    onClick={() => openReply(item?.id)}
                    className={`${commentId === item?.id && reply ? "hidden" : "block"} mb-2`}>
                      <ReplyButton />
                    </div>
                </div>
      </div>
      <div className={`${commentId === item?.id && reply ? "block":"hidden"}`}>
        <ReplyForm item={item} />
      </div>
      </>
  )
}

export default CommentReply
