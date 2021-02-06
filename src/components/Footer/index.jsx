import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  render() {
    const {todos} = this.props
    const dones = todos.reduce((pre, todo)=>pre += todo.done ? 1 : 0, 0)
    return (
      <div className="todo-footer">
        <input 
          type="checkbox" 
          checked={todos.length !== 0 && dones === todos.length}
          onChange={(event)=>{this.props.updateAll(event.target.checked)}}/> 
        <span>已完成{dones}</span> / 共{todos.length}项 
        <button className="btn btn-danger" onClick={()=>{this.props.clearAllDone()}}>删除已完成项</button>
      </div>
    )
  }
}
