import React from 'react'

function Footer({itemLeft, allItems, activeItems, completedItems, clearCompleted}) {
  return (
    <div className='w-full px-2 py-5 flex justify-around text-xs 
                  dark:bg-slate-700 bg-white'>
      
      <div>{itemLeft} {itemLeft <= 1 ? "Item": "Items"} left</div>
      
      <div className='flex gap-2'>
        <div onClick={allItems}
            className='cursor-pointer'>All</div>
        <div onClick={activeItems}
            className='cursor-pointer'>Active</div>
        <div onClick={completedItems}
            className='cursor-pointer'>completed</div>
      </div>
      
      <div onClick={clearCompleted}
            className='cursor-pointer'>Clear completed</div>
    </div>
  )
}

export default Footer
