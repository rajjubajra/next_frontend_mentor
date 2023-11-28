'use client';
import {useEffect, useState} from 'react';
import Header from './components/Header';
import Listing from './components/Listing';
import PostTodo from './components/PostTodo';
import Footer from './components/Footer';

function TodoApp() {

  // Todo listing
  const [listTodos, setListTodos] = useState([]);
  // State for managing todo items
  const [todos, setTodos] = useState([]);
  // State for capturing input value
  const [newTodo, setNewTodo] = useState('');
  // cross Icon visibility
  const [crossIconVisibility, setCrossIconVisibility] = useState('');
  // const item left todo [not-completed]
  const [itemLeft, setItemLeft] = useState(0);

  //console.log('cross', listTodos);


  /** populate ListTotos */
  useEffect(()=> {
    setListTodos(todos)
  },[todos])
  
  /** Left Item counter */
  useEffect(()=> {  
    const done = todos.reduce((count, item)=> {
      return count + (item.completed ? 1 : 0);
    },0)
    setItemLeft(todos.length - done);

  },[todos])

/** Add new item */
  const addNewTodo = () => {
      if(newTodo.trim() !== '') {
        setTodos([...todos, {id: new Date(), task: newTodo, completed: false}]);
        setNewTodo('');
      }
  }

/** List: filter Active only */
  const activeItems = () => {
    const filterArr = todos.filter((item) => item.completed === false);
    return setListTodos(filterArr);
  } 
/** List: filter Complited only */
const completedItems = () => {
  const filterArr = todos.filter((item) => item.completed === true);
  return setListTodos(filterArr);
}   
/** List: all */
const allItems = () => setListTodos(todos);


/** Delete all completed item */
  const clearCompleted = () => {
    const newArr = [];
    todos && todos?.map((item) => {
      if(!item.completed)
      newArr.push(item);
    })
    return setTodos(newArr);
  }
/** Delete single item */
  const deleteItem = (id) => {
    const filteredItem = todos.filter(item => item.id !== id );
    setTodos(filteredItem);
  }
/** Toggle completed todo */
  const completedTodo = (id, todo) => {
    console.log('task id', id);
    // Find the index of the todo item to update
    const todoIndex = todos.findIndex((todo) => todo.id === id);

    // Make a shallow copy of the todos array
    const updatedTodos = [...todos];

    // Update the specific todo item
    updatedTodos[todoIndex] = { ...updatedTodos[todoIndex], completed: !todo.completed };

    // Update the state with the new todos array
    setTodos(updatedTodos);
  }
  /** DATE FORMAT: Todos listing */
  const dateFormat = (dt) => {
    const date = new Date(dt);
    return date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear();
  }
  


  return (
    <div className="bg-[url('/assets/todo_app/images/bg-desktop-light.jpg')] 
    dark:bg-[url('/assets/todo_app/images/bg-desktop-dark.jpg')]
    w-full min-h-screen bg-no-repeat">

    <div className='w-96 m-auto pt-20'>

      <div className='my-4'>
        <Header />
      </div>

      {/** Post Todo */}
      <PostTodo addNewTodo={addNewTodo} newTodo={newTodo} setNewTodo={setNewTodo}  />

      {/** TODO LISTING */}
      <div className='mt-10'>{
        listTodos && listTodos?.map((todo, i) => {
          return <Listing 
            key={i}
            todo={todo} 
            setCrossIconVisibility={setCrossIconVisibility} 
            crossIconVisibility={crossIconVisibility}
            completedTodo={completedTodo} 
            dateFormat={dateFormat} 
            deleteItem={deleteItem}
          />
        })
      }</div>
      
      {/** Footer */}
      <div className={`${todos.length ? "block" : "hidden"} border-t dark:border-slate-500`}>
      <Footer 
      itemLeft={itemLeft} 
      allItems={allItems} 
      activeItems={activeItems} 
      completedItems={completedItems} 
      clearCompleted={clearCompleted} /> 
      </div>

    </div>
    
    </div>
  )
}

export default TodoApp