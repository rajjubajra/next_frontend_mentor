import {useEffect, useState} from 'react';


function PostTodo({addNewTodo, setNewTodo, newTodo}) {

  /** submit button active and inactive */
  const [submit, setSubmit] = useState(false);
  useEffect(()=> {
      newTodo.length >= 3 ? setSubmit(true): setSubmit(false);
  },[newTodo])


  return (
    <div className='flex bg-white dark:bg-slate-700'>        
        <button
        onClick={addNewTodo}
        className={`w-6 h-5 m-5 rounded-full border ${submit ? "hover:bg-green-500 border-slate-500" : "cursor-not-allowed"}`}></button>
        <input
          className='py-2 px-2 w-full my-2 rounded-sm outline-none dark:bg-slate-700'
          type="text" 
          name="todo" 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="create a new todo" />
    </div>
  )
}

export default PostTodo