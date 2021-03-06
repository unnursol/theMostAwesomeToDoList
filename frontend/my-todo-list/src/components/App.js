import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <h1>The most awesome todo list</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
