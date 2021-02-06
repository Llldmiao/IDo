import React, { Component, createRef } from 'react'
import './index.css'
export default class Item extends Component {

  state = {mouse:false}

  ref1 = createRef()
  //handleCheck todo勾选、取消的回调
  handleCheck = (id) => {
    //更新勾选状态
    return (event) => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  handleClick = (id)=>{
    return () => this.props.updateTodo(id, !this.ref1.current.checked)
  }
  render() {
    const { id, name, done, deleteTodo } = this.props
    return (
      <li 
        className="item" 
        id={id} 
        onMouseEnter={()=>{this.setState({mouse:true})}}
        onMouseLeave={()=>{this.setState({mouse:false})}}
      >
        <div style={{display:'inline-block'}} onClick={this.handleClick(id)}>
          <input
            type="checkbox"
            ref={this.ref1}
            checked={done}
            onChange={this.handleCheck(id)} />{name}
        </div>
        <button
          className="btn btn-danger"
          onClick={() => deleteTodo(id)}
          style={{display: this.state.mouse ? 'block' : 'none'}}
          >删除
          </button>
      </li>
    )
  }
}
