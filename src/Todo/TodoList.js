import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList(props){
    return (
       <ul>
           {/* <li>1</li>
           <li>2</li>
           <TodoItem/> */}

           {props.todos.map((todo, index) =>{
               return <TodoItem todo={todo} key={todo.id} index={index} onChange={props.onToggle}/>
           }
            )}

       </ul> 
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default  TodoList