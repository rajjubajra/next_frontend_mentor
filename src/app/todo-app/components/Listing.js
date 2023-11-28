import CrossIcon from './CrossIcon';
import CheckIcon from './CheckIcon';

function Listing({
  todo, 
  setCrossIconVisibility, 
  crossIconVisibility,
  completedTodo, 
  dateFormat, 
  deleteItem}) {
  return (
    <div className={`w-full p-5 flex justify-between 
                    dark:bg-slate-800 bg-white dark:text-slate-100
                      border-t dark:border-slate-500
                      first-line:rounded-t-lg ${todo.completed ? 'line-through' : ''}`}
      onMouseOver={() => setCrossIconVisibility(todo.id)}
      onMouseLeave={() => setCrossIconVisibility('')}>
        <div className='flex gap-4'>
            <div 
              className={`w-6 h-6 border rounded-full p-1 dark:bg-slate-500 cursor-pointer`}
              onClick={() => completedTodo(todo.id,todo)}>
              <div className={todo.completed ? "block" : "hidden"}><CheckIcon /></div>
            </div>
            <div>
              <div className='text-[0.5rem]'>{dateFormat(todo.id)}</div>
              <div>{todo.task}</div>
            </div>
        </div>
        <div className={`${crossIconVisibility === todo.id ? "block" : "hidden"}`}>
              <div onClick={() => deleteItem(todo.id)}
                className='cursor-pointer'><CrossIcon />
              </div>
        </div>
    </div>
  )
}

export default Listing