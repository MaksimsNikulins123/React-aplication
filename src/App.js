import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import AddTodo from './Todo/AddTodo'


function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: 'John Smith'},
    {id:2, completed: false, title: 'Poul Joung'},
    {id:3, completed: true, title: 'Jane Storm'}
  ])


 

  function toggleTodo(id) {
    // console.log('todo id', id)
    setTodos(todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    ) 
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }])
    )
  }

  return (
    <Context.Provider value={{removeTodo}}>
        <div className='wrapper'>
            <h1>Registration Form</h1>
              
              <AddTodo onCreate={addTodo}>

              </AddTodo>
    {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}></TodoList> : <p>No todos</p>}
               
        </div> 

    </Context.Provider>
    
  ) 
    
  
}

export default App;
