import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

export default class App extends Component {

  state = {
    todos: [
      { id: '1', name: '学React', done: false },
      { id: '2', name: '吃午饭', done: false },
      { id: '3', name: '刷算法题目', done: false },
      { id: '4', name: '玩游戏', done: true }
    ]
  }

  //添加todo
  addTodo = (todoObj) => {
    console.log(todoObj)
    const { todos } = this.state
    this.setState({ todos: [todoObj, ...todos] })
  }

  //updateTodo 更新todo状态
  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todo) => {
      if(todo.id === id) return {...todo, done}
      else return todo
    })
    this.setState({todos:newTodos})
  }

  //deleteTodo 删除一个todo
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=> todo.id !== id)
    this.setState({todos:newTodos})
  }

  //updateAll 更新全部todo状态
  updateAll = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todo)=> { return {...todo, done}})
    this.setState({todos:newTodos})
  }

  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todo)=>!todo.done)
    this.setState({todos:newTodos})
  }

  render() {
    const { todos } = this.state
    return (
      <div className="container">
        <div className="todo-warp">
          <Header addTodo={this.addTodo} />
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos} updateAll={this.updateAll} clearAllDone={this.clearAllDone}/>
        </div>
      </div>
    )
  }
}

