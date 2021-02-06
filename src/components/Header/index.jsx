import React, { Component } from 'react'
import './index.css'
import {nanoid} from 'nanoid';
export default class Header extends Component {
  //键盘事件回调
  handleAdd = (event) => {
    const {keyCode, target} = event
    //用户按下回车 
    if (keyCode === 13 && target.value.trim() !== '') {
      //准备好一个todo对象
      const todoObj = {id:nanoid(), name:target.value, done:false}
      // console.log(todoObj)
      this.props.addTodo(todoObj)

      target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" name="input" onKeyUp={this.handleAdd} placeholder="输入todo，按回车添加todo" />
      </div>
    )
  }
}
